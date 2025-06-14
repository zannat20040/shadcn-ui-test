import { ArrowDown } from "lucide-react";

export default function BannerTextAnimation() {
  const text = "DREAM BIG STUDY ABROAD.";
  const letters = text.split("");

  return (
    <div className="flex justify-center items-center w-full relative z-30">
      <div className="absolute w-[170px] h-[170px] rounded-full bg-white dark:text-blue-50 dark:bg-gray-900 flex justify-center items-center  ">
        {/* Center Arrow Icon */}
        <div className="absolute text-[#35383F] animate-bounce z-10 ">
          <ArrowDown size={50} className="dark:text-blue-50"/>
        </div>

        {/* Rotating Text */}
        <div className="absolute w-full h-full  animate-[spin_10s_linear_infinite]">
          {letters.map((char, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-0 text-sm p-2.5"
              style={{
                transform: `rotate(${i * 15.5}deg)`,
                transformOrigin: "0 85px",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
