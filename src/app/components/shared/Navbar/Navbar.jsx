import Image from "next/image";
import SGElOGO from "/public/logo/SGE-Logo.png";
import LargeScreenMenu from "./LargeScreenMenu";
import SmallScreenMenu from "./SmallScreenMenu";

export default function Navbar() {
  const menuStyle = ` font-medium `;
  return (
    <section className="text-black bg-blue-50 tracking-tighter sticky top-0  left-0 right-0">
      <section className="max-w-7xl px-4 mx-auto py-7 text-sm ">
        <section className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-y-2 gap-x-12 w-full">
          {/* logo part */}
          <section>
            <Image
              loading="eager"
              placeholder="blur"
              src={SGElOGO}
              width={250}
              height={100}
sizes="(max-width: 640px) 160px, 250px"   
              alt="shabuj global logo"
            />
          </section>

          {/* large screen menu */}
          <LargeScreenMenu menuStyle={menuStyle} />
          {/* small screen menu */}
          <SmallScreenMenu menuStyle={menuStyle} />
        </section>
      </section>
    </section>
  );
}
