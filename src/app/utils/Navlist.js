import flag1 from "/public/Flags/Australia Flag.webp";
import flag2 from "/public/Flags/Canada Flag.webp";
import flag3 from "/public/Flags/Germany Flag.webp";
import flag4 from "/public/Flags/Newzealand Flag.webp";
import flag5 from "/public/Flags/UK Flag.webp";
import flag6 from "/public/Flags/USA Flag.webp";
import testLogo1 from "/public/logo/IELTS-Logo2.webp";
import testLogo2 from "/public/logo/SELT-Logo1.webp";
import {
  BookText,
  CircleCheckBig,
  Clock3,
  Heart,
  Info,
  LayoutGrid,
  Mic,
  PhoneCall,
  Rss,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

export  const NavList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Study Destination",
      path: "/",
      nestedRoutes: [
        { title: "UK", path: "/", flag: flag1 },
        { title: "USA", path: "/", flag: flag2 },
        { title: "Germany", path: "/", flag: flag3 },
        { title: "Switzerland", path: "/", flag: flag4 },
        { title: "Canda", path: "/", flag: flag5 },
        { title: "Australia", path: "/", flag: flag6 },
      ],
    },
    {
      title: "Services",
      path: "/",
      nestedRoutes: [
        {
          title: "For Students",
          path: "/",
          icon: <UserRound size={18} className="hover:text-blue-900 " />,
          description: "Guidance on universities, scholarships, visas & more.",
        },
        {
          title: "Channel Partmers",
          path: "/",
          icon: <UsersRound size={18} className="hover:text-blue-900 " />,
          description: "Collaborate with us for global student success.",
        },
      ],
    },
    {
      title: "Events & Webinars",
      path: "/",
    },
    {
      title: "Test Prep.",
      path: "/",
      nestedRoutes: [
        { logo: testLogo1, path: "/", title: "IELTS" },
        { logo: testLogo2, path: "/", title: "SELT" },
      ],
    },
    {
      title: "Know More",
      path: "/",
      nestedRoutes: [
        {
          title: "About Us",
          path: "/",
          icon: <Info size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Who We are",
          path: "/",
          icon: <LayoutGrid size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Our Partners",
          path: "/",
          icon: <Heart size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Our Timeline",
          path: "/",
          icon: <Clock3 size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Our Leadership Team",
          path: "/",
          icon: <UsersRound size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Award recognaitions ",
          path: "/",
          icon: <CircleCheckBig size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Partner with us",
          path: "/",
          icon: <ShieldCheck size={18} className="hover:text-blue-900 " />,
        },

        {
          title: "News & Press",
          path: "/",
          icon: <Mic size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Careers",
          path: "/",
          icon: <BookText size={18} className="hover:text-blue-900 " />,
        },
        {
          title: "Blog",
          path: "/",
          icon: <Rss size={18} className="hover:text-blue-900 " />,
        },
        // {
        //   title: "Contact Us",
        //   path: "/",
        //   icon: <PhoneCall size={18} className="hover:text-blue-900 " />,
        // },
      ],
    },
  ];