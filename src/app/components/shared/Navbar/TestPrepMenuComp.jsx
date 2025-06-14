import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TestPrepMenuComp({ nestedRoute }) {
  return (
    <Link href={nestedRoute?.path} className="max-w-[150px] max-h-[100px]">
      <Image
        loading="lazy"
        responsive="true"
        src={nestedRoute?.logo}
        alt={nestedRoute?.title}
      />
    </Link>
  );
}
