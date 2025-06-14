import Image from "next/image";
import Link from "next/link";
import RegistrationButton from "./components/shared/RegistrationButton";
import notfoundImg from "/public/NOT-FOUND/9-404-error-illustration-2048x908-vp03fkyu.png";
export default function NotFound() {
  return (
    <div className=" container mx-auto px-4 bg-whtie min-h-screen my-auto  flex flex-col items-center justify-center p-6">
      <div className=" w-full max-w-md ">
        <Image
          src={notfoundImg}
          alt="404 Illustration"
          responsive="true"
          objectFit="contain"
          priority
        />
      </div>

      <h1 className=" tracking-tighter text-3xl md:text-4xl font-bold text-blue-900 dark:text-violet-400 mt-8 text-center">
        There is nothing here
      </h1>
      <p className="text-gray-600 text-base md:text-lg  mt-3 text-center max-w-md dark:text-blue-50 text-blak">
        ..maybe the page you are looking for does not exist or was moved.
        <br />
        Let&apos;s get you back on track.
      </p>

      <Link href="/" className="mt-8">
        <RegistrationButton
          label={"Go back home"}
          style={`
          bg-blue-900 dark:bg-violet-400
          border-blue-900 dark:!border-violet-400
          hover:text-blue-900 dark:hover:!text-violet-400
         `}
        />
      </Link>
    </div>
  );
}
