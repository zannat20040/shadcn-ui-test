import { NavList } from "@/app/utils/Navlist";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import RegistrationButton from "../RegistrationButton";
import dynamic from "next/dynamic";
const AboutUsMenuComp = dynamic(() => import("./AboutUsMenuComp"));
const StudyDestiantionMenuComp = dynamic(() => import("./StudyDestiantionMenuComp"));
const TestPrepMenuComp = dynamic(() => import("./TestPrepMenuComp"));


export default function SmallScreenMenu({ menuStyle }) {
  return (
    <section className="lg:hidden flex items-center gap-5 overflow-y-auto">
      {/* theme changer */}
      <ModeToggle />
      {/* drawer code */}
      <section className="drawer drawer-end">
        {/* side menu open button */}
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <section className="drawer-content">
          {/* open button */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button cursor-pointer "
          >
            <Menu className="text-blue-900" />
          </label>
        </section>
        {/* drawer */}
        <section className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <ul className="menu bg-blue-50  min-h-full w-56  sm:w-60 p-4">
            {/* registration btn */}
            <RegistrationButton />
            {/* side menu */}
            <section className="mt-8 flex flex-col gap-y-3">
              {NavList?.map((nav, index) => (
                <search className=" group" key={`sidemenu${index}`}>
                  <Link href={nav?.path} className="flex gap-x-1 items-center">
                    <span>{nav?.title}</span>
                    {nav?.nestedRoutes && (
                      <ChevronDown
                        size={18}
                        className="group-hover:rotate-180 duration-500 transition-all"
                      />
                    )}
                  </Link>
                  {/* nested Dropdown menu */}
                  {nav?.nestedRoutes && (
                    <section
                      className={`overflow-hidden rounded-md ${
                        nav.title === "Study Destination"
                          ? "grid-cols-2 grid gap-3"
                          : "flex-col flex gap-y-3 bg-gray-200/40 group-hover:p-5 group-hover:mt-4 "
                      }
                    opacity-0 w-full h-0  transition-all duration-500 ease-in-out 
                    group-hover:opacity-100 group-hover:h-auto group-hover:py-4`}
                    >
                      {/* test prep nested menu */}
                      {nav?.title === "Test Prep." ? (
                        <>
                          {nav?.nestedRoutes.map((nestedRoute, i) => (
                            <TestPrepMenuComp
                              key={`testprep${i}`}
                              nestedRoute={nestedRoute}
                            />
                          ))}
                        </>
                      ) : nav?.title === "Study Destination" ? (
                        // study destination nested route
                        nav?.nestedRoutes.map((nestedRoute, i) => (
                          <StudyDestiantionMenuComp
                            key={`StudyDest${i}`}
                            nestedRoute={nestedRoute}
                          />
                        ))
                      ) : (
                        <>
                          {/* others nested routes */}
                          {nav?.nestedRoutes.map((nestedRoute, i) => (
                            <AboutUsMenuComp
                              key={`service${i}`}
                              nestedRoute={nestedRoute}
                            />
                          ))}
                        </>
                      )}
                    </section>
                  )}
                </search>
              ))}
            </section>
          </ul>
        </section>
      </section>
    </section>
  );
}
