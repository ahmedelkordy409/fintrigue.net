import Hero from '@/components/home/Hero';
import WhyFintrigue from '@/components/home/WhyFintrigue';
import LatestNews from '@/components/home/LatestNews';
import Newsletter from '@/components/home/Newsletter';

// Mock data for demonstration - replace with actual WordPress API calls
const mockArticles = [
  {
    id: 1,
    title: "HE NEW ERA OF GUEST EXPERIENCE: PERSONALIZATION & TECH INTEGRATION",
    excerpt: "A strategic guide for hotel owners and managers for revitalizing struggling properties. Learn the essential steps—from staff retraining and service design to digital marketing and revenue management—to increase ADR, occupancy, and guest satisfaction.",
    date: "23.02.25 20:21",
    slug: "guest-experience-personalization-tech-integration",
  },
  {
    id: 2,
    title: "HE NEW ERA OF GUEST EXPERIENCE: PERSONALIZATION & TECH INTEGRATION",
    excerpt: "A strategic guide for hotel owners and managers for revitalizing struggling properties. Learn the essential steps—from staff retraining and service design to digital marketing and revenue management—to increase ADR, occupancy, and guest satisfaction.",
    date: "23.02.25 20:21",
    slug: "guest-experience-personalization-tech-integration-2",
  },
  {
    id: 3,
    title: "HE NEW ERA OF GUEST EXPERIENCE: PERSONALIZATION & TECH INTEGRATION",
    excerpt: "A strategic guide for hotel owners and managers for revitalizing struggling properties. Learn the essential steps—from staff retraining and service design to digital marketing and revenue management—to increase ADR, occupancy, and guest satisfaction.",
    date: "23.02.25 20:21",
    slug: "guest-experience-personalization-tech-integration-3",
  },
  {
    id: 4,
    title: "HE NEW ERA OF GUEST EXPERIENCE: PERSONALIZATION & TECH INTEGRATION",
    excerpt: "A strategic guide for hotel owners and managers for revitalizing struggling properties. Learn the essential steps—from staff retraining and service design to digital marketing and revenue management—to increase ADR, occupancy, and guest satisfaction.",
    date: "23.02.25 20:21",
    slug: "guest-experience-personalization-tech-integration-4",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
        <Hero />
        <LatestNews articles={mockArticles} />
        <WhyFintrigue />
        <Newsletter />
    </div>
  );
}