import { WordPressPost, WordPressCategory, NewsArticle } from '@/types/wordpress';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com';
const WP_API_URL = `${WORDPRESS_URL}/wp-json/wp/v2`;

class WordPressAPI {
  private async fetchAPI(endpoint: string, options: RequestInit = {}) {
    const url = `${WP_API_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getPosts(params: {
    page?: number;
    perPage?: number;
    categories?: string;
    tags?: string;
    search?: string;
    orderby?: 'date' | 'title' | 'slug' | 'relevance';
    order?: 'asc' | 'desc';
  } = {}): Promise<{ posts: WordPressPost[]; totalPages: number; total: number }> {
    const searchParams = new URLSearchParams();

    searchParams.set('_embed', 'true');
    searchParams.set('page', (params.page || 1).toString());
    searchParams.set('per_page', (params.perPage || 10).toString());

    if (params.categories) searchParams.set('categories', params.categories);
    if (params.tags) searchParams.set('tags', params.tags);
    if (params.search) searchParams.set('search', params.search);
    if (params.orderby) searchParams.set('orderby', params.orderby);
    if (params.order) searchParams.set('order', params.order);

    const response = await fetch(`${WP_API_URL}/posts?${searchParams.toString()}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
    const total = parseInt(response.headers.get('X-WP-Total') || '0');

    return { posts, totalPages, total };
  }

  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const posts = await this.fetchAPI(`/posts?slug=${slug}&_embed=true`);
      return posts.length > 0 ? posts[0] : null;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  }

  async getPostById(id: number): Promise<WordPressPost | null> {
    try {
      return await this.fetchAPI(`/posts/${id}?_embed=true`);
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      return null;
    }
  }

  async getCategories(): Promise<WordPressCategory[]> {
    try {
      return await this.fetchAPI('/categories?per_page=100');
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async getFeaturedPosts(limit: number = 5): Promise<WordPressPost[]> {
    try {
      const { posts } = await this.getPosts({
        perPage: limit,
        orderby: 'date',
        order: 'desc'
      });
      return posts.filter(post => post.sticky);
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }
  }

  async getLatestPosts(limit: number = 10): Promise<WordPressPost[]> {
    try {
      const { posts } = await this.getPosts({
        perPage: limit,
        orderby: 'date',
        order: 'desc'
      });
      return posts;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      return [];
    }
  }

  // Transform WordPress post to our NewsArticle format
  transformToNewsArticle(wpPost: WordPressPost): NewsArticle {
    const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
    const author = wpPost._embedded?.['author']?.[0];
    const categories = wpPost._embedded?.['wp:term']?.[0] || [];
    const tags = wpPost._embedded?.['wp:term']?.[1] || [];

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = wpPost.content.rendered.replace(/<[^>]*>/g, '').split(' ').length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      id: wpPost.id,
      title: wpPost.title.rendered,
      excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>/g, ''),
      content: wpPost.content.rendered,
      slug: wpPost.slug,
      publishedAt: wpPost.date,
      updatedAt: wpPost.modified,
      featuredImage: featuredMedia ? {
        url: featuredMedia.source_url,
        alt: featuredMedia.alt_text || wpPost.title.rendered,
        width: featuredMedia.media_details?.width || 0,
        height: featuredMedia.media_details?.height || 0,
      } : null,
      author: {
        name: author?.name || 'Unknown',
        avatar: author?.avatar_urls?.[96] || '',
      },
      categories: categories.map((cat: { name: string }) => cat.name),
      tags: tags.map((tag: { name: string }) => tag.name),
      readingTime,
    };
  }
}

export const wordpressAPI = new WordPressAPI();