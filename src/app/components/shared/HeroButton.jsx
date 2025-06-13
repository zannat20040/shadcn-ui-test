import React from "react";

export default function HeroButton({ label, style }) {
  return (
    <button
      className={`${style} px-6 py-3 rounded-full transition-all duration-500 hover:bg-blue-900 hover:text-white hover:px-10`}
    >
      {label}
    </button>
  );
}
