import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import newsletterCover from '../../../designs/home/assests/newesletter-cover.png';

const Newsletter = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg" style={{ backgroundImage: `url(${newsletterCover.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4" style={{ color: '#000000' }}>Join the Newsletter</h3>
              <p className="mb-6 text-sm sm:text-base leading-relaxed" style={{ color: '#1F2937' }}>
                Stay ahead of the story. Get weekly insights and investigations delivered straight to your inbox.
              </p>
            </div>
            <div className="max-w-[980px] w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 border border-[#1F2937] bg-white">
                <Input type="text" placeholder="Enter your name" className="flex-1 h-10 sm:h-12 md:h-14 rounded-none border border-[#E5E7EB] focus-visible:ring-0 focus-visible:outline-none px-4 text-sm sm:text-base" />
                <Button className="rounded-none h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base whitespace-nowrap" style={{ backgroundColor: '#2B2B2B', color: '#FFFFFF' }}>Subscribe Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;