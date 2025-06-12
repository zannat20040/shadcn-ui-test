import React from "react";
import NavListComp from "./NavListComp";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import RegistrationButton from "../RegistrationButton";


export default function LargeScreenMenu({ menuStyle }) {
  return (
    <>
      {/* middle menu */}
      <NavListComp menuStyle={menuStyle} />
      {/* right menu */}
      <section className="hidden lg:flex gap-2  justify-end w-full xl:w-auto">
        {/* theme changer */}
        <ModeToggle />
        <section className="flex gap-5 border-l border-gray-200 pl-5 items-center">
          <Link href={"/"} className={menuStyle}>
            Contact Us
          </Link>
          {/* registration button */}
          <RegistrationButton />
        </section>
      </section>
    </>
  );
}
