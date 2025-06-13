"use client";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
const ModeToggle = dynamic(
  () => import("./ModeToggle").then((mod) => mod.ModeToggle), // <--- FIX IS HERE: Return mod.ModeToggle
  {
    ssr: false,
    loading: () => (
      <Button
        variant="outline"
        size="icon"
        className={"rounded-full bg-transparent border-0 shadow-none"}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    ),
  }
);
export default function ThemeButton() {
  return <ModeToggle />;
}
