import Link from "next/link";
import React from "react";

export default function ServicesMenuComp({ nestedRoute }) {
  return (
    <Link
      href={nestedRoute?.path}
      className="hover:bg-gray-100 p-4 rounded-md duration-500 service hover:text-blue-800  "
    >
      <section className="flex gap-x-5 items-start ">
        <span>{nestedRoute?.icon}</span>
        <section className="mt-0">
          <span className="font-medium service-hover:text-blue-800 ">
            {nestedRoute?.title}
          </span>
          <p className="font-normal">{nestedRoute?.description}</p>
        </section>
      </section>
    </Link>
  );
}
