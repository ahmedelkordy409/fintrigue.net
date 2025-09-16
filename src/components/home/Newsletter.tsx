import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import newsletterCover from '../../../designs/home/assests/newesletter-cover.png';

const Newsletter = () => {
  return (
    <section className="py-28 md:py-32" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative overflow-hidden" style={{ backgroundImage: `url(${newsletterCover.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-16 md:p-20">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold mb-3" style={{ color: '#000000' }}>Join the Newsletter</h3>
              <p className="mb-6 text-base leading-relaxed" style={{ color: '#1F2937' }}>
                Stay ahead of the story. Get weekly insights and investigations delivered straight to your inbox.
              </p>
            </div>
            <div className="max-w-[980px] w-full">
              <div className="flex items-center gap-3 p-3 border border-[#1F2937] bg-white">
                <Input type="text" placeholder="Name" className="flex-1 h-12 md:h-14 rounded-none border border-[#E5E7EB] focus-visible:ring-0 focus-visible:outline-none px-4" />
                <Button className="rounded-none h-12 md:h-14 px-10" style={{ backgroundColor: '#2B2B2B', color: '#FFFFFF' }}>Try out Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;