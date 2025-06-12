import Image from "next/image";
import Link from "next/link";

export default function StudyDestiantionMenuComp({ nestedRoute }) {
  return (
    <Link
      href={nestedRoute?.path}
      className="w-full  flex flex-col justify-between gap-4  items-center"
    >
      <Image
        loading="lazy"
        src={nestedRoute?.flag}
        alt={nestedRoute?.title}
        className="w-full h-full object-cover  rounded-md"
        width={200}
        height={180}
      />
      <p className="font-normal">{nestedRoute?.title}</p>
    </Link>
  );
}
