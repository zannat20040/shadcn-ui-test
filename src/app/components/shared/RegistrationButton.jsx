import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function RegistrationButton({
  label,
  style,
  type,
  arrowLeft,
  arrowRight,
}) {
  return (
    <Button
      type={type ? type : "button"}
      className={`capitalize bg-blue-900 rounded-full px-5 py-5 hover:bg-white border  hover:border-blue-900 duration-500  ${style} hover:text-blue-900 text-white`}
    >
      {arrowLeft && <ArrowLeft />} {label} {arrowRight && <ArrowRight />}
    </Button>
  );
}
