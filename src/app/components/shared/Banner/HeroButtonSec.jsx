
import React from "react";

export default function HeroButtonSec() {
  return (
    <div className="w-fit sm:p-1 sm:border sm:border-gray-300/50 sm:rounded-full flex-col sm:flex-row sm:inline-flex gap-2 group">
      {/* Book Free Consultation */}
      <button
        className="peer bg-blue-900 text-white px-6 py-3 rounded-full transition-all duration-500  
            group-hover:bg-transparent group-hover:text-blue-900
            hover:bg-blue-900 hover:text-white hover:px-10"
      >
        Book Free Consultation
      </button>

      {/* Apply now */}
      <button
        className="bg-transparent text-blue-900 px-6 py-3 rounded-full transition-all duration-500  
            hover:bg-blue-900 hover:text-white hover:px-10 font-medium hover:font-normal
            peer-hover:bg-transparent peer-hover:text-blue-900"
      >
        Apply now
      </button>
    </div>
  );
}
