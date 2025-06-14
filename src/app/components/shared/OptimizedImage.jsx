import Image from "next/image";
import React from "react";

export default function OptimizedImage({
  blur = true,
  src,
  alt,
  priority = false,
  className = "",
  loading = true,
  ...props
}) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder={blur ? "blur" : undefined}
      loading={loading ? "lazy" : undefined}
      priority={priority}
      responsive="true"
      className={`object-contain ${className}`}
      {...props}
    />
  );
}
