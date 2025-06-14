import Link from "next/link";
import RegistrationButton from "../components/shared/RegistrationButton";
import thankyouImg from "/public/NOT-FOUND/thank-you-concept-illustration_86047-837-removebg-preview.png";
import OptimizedImage from "../components/shared/OptimizedImage";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 bg-whtie min-h-screen my-auto  flex flex-col items-center justify-center p-6">
      <div className=" w-full max-w-md ">
        <OptimizedImage src={thankyouImg} alt="Thank Illustration" />
      </div>

      <h1 className=" tracking-tighter text-3xl md:text-4xl font-bold text-[#123fd0]  mt-8 text-center">
        Thank You!
      </h1>

      <p className="text-base md:text-lg  mt-3 max-w-lg  text-center text-gray-700  dark:text-blue-50">
        We’ve received your information and will get back to you shortly. In the
        meantime, check your email for next steps.
      </p>
      <Link href="/" className="mt-8">
        <RegistrationButton
          arrowLeft={true}
          label={"Go back home"}
          style={` !px-10
                    bg-[#123fd0] 
                    border-[#123fd0] 
                    hover:text-[#123fd0] 
                   `}
        />
      </Link>
    </div>
  );
}
