"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroButton from "../HeroButton";
const BannerBookingButton = dynamic(() => import("./BannerBookingButton"), {
  ssr: false,
  loading: () => (
    <HeroButton
      label={"Book Free Consultation"}
      style={`peer bg-blue-900 dark:text-white text-white group-hover:bg-transparent
      group-hover:text-blue-900`}
    />
  ),
});

export default function BookingComp() {
  return <BannerBookingButton />;
}
