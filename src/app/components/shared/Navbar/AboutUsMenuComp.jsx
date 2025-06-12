import Link from "next/link";

export default function AboutUsMenuComp({nestedRoute}) {
  return (
    <Link
      href={nestedRoute?.path}
    >
      <section className="flex gap-x-2 gap-y-3 items-start hover:text-blue-800 duration-500 font-normal transition-all  hover:tracking-normal">
        <span>{nestedRoute?.icon}</span>
        <section className="mt-0">
          <span className="service-hover:text-blue-800 ">
            {nestedRoute?.title}
          </span>
        </section>
      </section>
    </Link>
  );
}
