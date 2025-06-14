import Image from "next/image";
import LargeScreenMenu from "./LargeScreenMenu";
import SmallScreenMenu from "./SmallScreenMenu";
import SGElOGO from "/public/logo/SGE-Logo.png";

export default function Navbar() {
  const menuStyle = ` font-medium `;
  return (
    <section className="text-black bg-blue-50  sticky top-0  left-0 right-0 z-40">
      <section className="max-w-7xl px-4 mx-auto py-5 text-sm ">
        <section className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-y-2 gap-x-12 w-full">
          {/* logo part */}
          <section className="sm:w-[250px] w-[160px]">
            <Image
              loading="eager"
              placeholder="blur"
              src={SGElOGO}
              responsive='true'
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
