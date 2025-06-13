import { NavList } from "@/app/utils/Navlist";
import Link from "next/link";
const AboutUsMenuComp = dynamic(() => import("./AboutUsMenuComp"));
const StudyDestiantionMenuComp = dynamic(() =>
  import("./StudyDestiantionMenuComp")
);
const TestPrepMenuComp = dynamic(() => import("./TestPrepMenuComp"));
const ServicesMenuComp = dynamic(() => import("./ServicesMenuComp"));
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";


export default function NavListComp({ menuStyle }) {
  return (
    <section className="hidden lg:flex gap-x-5 font-medium">
      {NavList?.map((nav, index) => (
        <section key={`nav${index}`} className="relative group">
          {/* main routes */}
          <Link href={nav?.path} className="flex gap-x-1  items-center">
            <section className={menuStyle}>{nav?.title}</section>
            {nav?.nestedRoutes && (
              <ChevronDown
                size={18}
                className="group-hover:rotate-180 duration-500 transition-all"
              />
            )}
          </Link>

          {/* Nested Routes */}
          {nav.nestedRoutes && (
            <section
              className="fixed top-[125px] xl:top-[81px] left-0 w-full bg-white drop-shadow-xl 
                     overflow-hidden transition-all duration-300 ease-in-out
                     max-h-0 opacity-0 translate-y-2
                     group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0"
            >
              <section
                className={`max-w-7xl mx-auto w-full px-32  ${
                  nav?.title === "Study Destination"
                    ? "grid grid-cols-7 items-center justify-between py-14  gap-5"
                    : nav?.title === "Test Prep."
                    ? "flex items-center justify-center gap-20 py-10 "
                    : nav?.title === "Know More"
                    ? "grid grid-cols-4 items-center justify-between py-14  gap-5"
                    : "flex items-center py-10  gap-5"
                }`}
              >
                {/* study destination nested menu */}
                {nav?.title === "Study Destination" &&
                  nav?.nestedRoutes.map((nestedRoute, i) => (
                    <StudyDestiantionMenuComp
                      key={`StudyDest${i}`}
                      nestedRoute={nestedRoute}
                    />
                  ))}
                {/* services nested menu */}
                {nav?.title === "Services" &&
                  nav?.nestedRoutes.map((nestedRoute, i) => (
                    <ServicesMenuComp
                      key={`service${i}`}
                      nestedRoute={nestedRoute}
                    />
                  ))}
                {/* test prep nested menu */}
                {nav?.title === "Test Prep." &&
                  nav?.nestedRoutes.map((nestedRoute, i) => (
                    <TestPrepMenuComp
                      key={`testprep${i}`}
                      nestedRoute={nestedRoute}
                    />
                  ))}
                {/* about us nested menu */}
                {nav?.title === "Know More" &&
                  nav?.nestedRoutes.map((nestedRoute, i) => (
                    <AboutUsMenuComp
                      key={`service${i}`}
                      nestedRoute={nestedRoute}
                    />
                  ))}
              </section>
            </section>
          )}
        </section>
      ))}
    </section>
  );
}
