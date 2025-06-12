import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TestPrepMenuComp({ nestedRoute }) {
  return (
    <Link href={nestedRoute?.path}>
      <Image
        loading="lazy"
        width={150}
        height={100}
        src={nestedRoute?.logo}
        alt={nestedRoute?.title}
      />
    </Link>
  );
}
