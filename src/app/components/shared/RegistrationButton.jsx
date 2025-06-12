import { Button } from "@/components/ui/button";
import React from "react";

export default function RegistrationButton() {
  return (
    <Button
      className={
        "bg-blue-900 rounded-full px-5 py-5 hover:bg-white border  hover:border-blue-900 duration-500  hover:text-blue-900 tracking-tighter text-white"
      }
    >
      Registration
    </Button>
  );
}
