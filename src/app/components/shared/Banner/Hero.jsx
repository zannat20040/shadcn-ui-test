import Image from "next/image";
import BookingComp from "./BookingComp";
import RegistrationButton from "../RegistrationButton";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main
      className="relative  text-black"
      style={{
        minHeight: "500px",
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

      <main className="absolute left-0 top-0 h-full w-full md:w-full z-[1] pointer-events-none">
        <section className="w-full h-full bg-gradient-to-r from-blue-50 via-blue-50 to-transparent "></section>
      </main>

      <main className="relative z-[2] max-w-7xl mx-auto px-6 pb-32 sm:pt-24 pt-16">
        <section className="max-w-2xl">
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

          {/* Action section */}
          <section className="w-fit sm:p-1 sm:border sm:border-gray-300/50 sm:rounded-full flex-col sm:flex-row sm:inline-flex gap-2 group">
            {/* Book Free Consultation */}
            <BookingComp />
            {/* Apply now */}
            <button
              className="bg-transparent text-blue-900 px-6 py-3 rounded-full transition-all duration-500  
            hover:bg-blue-900 hover:text-white hover:px-10 font-medium hover:font-normal
            peer-hover:bg-transparent peer-hover:text-blue-900"
            >
              Apply now
            </button>
          </section>
        </section>
      </main>
    </main>
  );
}
