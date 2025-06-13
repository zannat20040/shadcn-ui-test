import dynamic from 'next/dynamic';
import Image from 'next/image'; // Import the Image component
const HeroButtonSec = dynamic(() => import('./HeroButtonSec'), {
  ssr: true, 
  loading: () => <p>Loading buttons...</p>, 
});

export default function Hero() {
  return (
    <main
      className="relative tracking-tighter text-black"
      style={{
        minHeight: '500px', 
      }}
    >
      {/* Background Image using next/image */}
      <Image
        src="/banner/banner.jpg" 
        alt="Students studying abroad" 
        fill 
        priority 
        className="object-cover object-center" 
        sizes="(max-width: 768px) 100vw, 100vw" 
      />

      <div className="absolute left-0 top-0 h-full w-full md:w-full z-[1] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-blue-50 via-blue-50 to-transparent "></div>
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-6 pb-32 sm:pt-24 pt-16">
        <div className="max-w-2xl">
          <span className="bg-blue-600/10 text-blue-800 text-sm py-1 px-4 rounded">
            Dream Big, Study Abroad
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 mt-3">
            From <span className="text-blue-800">Admission to Visa </span>—
            We’ve Got You Covered!
          </h1>
          <p className="text-lg mb-8">
            Don’t let paperwork slow you down. We help students study abroad
            with easy support for applications, visas, and test prep.Your
            journey starts now — stop dreaming, start doing!
          </p>

          <HeroButtonSec />
        </div>
      </div>
    </main>
  );
}