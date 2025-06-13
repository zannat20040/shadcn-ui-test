import React from "react";
import NavListComp from "./NavListComp";

import Link from "next/link";
import RegistrationButton from "../RegistrationButton";
import ThemeButton from "../ThemeButton";

export default function LargeScreenMenu({ menuStyle }) {
  return (
    <>
      {/* middle menu */}
      <NavListComp menuStyle={menuStyle} />
      {/* right menu */}
      <section className="hidden lg:flex gap-2  justify-end w-full xl:w-auto">
        {/* theme changer */}
        <ThemeButton />
        <section className="flex gap-5 border-l border-gray-200 pl-5 items-center">
          <Link href={"/"} className={menuStyle}>
            Contact Us
          </Link>
          {/* registration button */}
          <RegistrationButton label={"Registration"} />
        </section>
      </section>
    </>
  );
}
