"use client";
import React from "react";
import dynamic from "next/dynamic";
const BannerBookingButton = dynamic(() => import("./BannerBookingButton"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function BookingComp() {
  return <BannerBookingButton />;
}
