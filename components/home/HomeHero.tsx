"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/contact.jpeg",
  "/images/contact2.jpeg",
];

export default function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Background ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            currentImage === index ? "opacity-75" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
<div className="absolute inset-0 bg-black/20" />

{/* Content */}
<div className="absolute inset-0 flex items-center">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
    <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 text-black bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
        <Leaf size={11} />
        100% Natural Wellness Extracts
      </div>

      {/* Heading */}
      <h1
        className="font-bold leading-tight"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        <span className="block text-orange-600 text-4xl sm:text-5xl lg:text-7xl">
          Nature's
        </span>

        <span className="block text-orange-600 text-4xl sm:text-5xl lg:text-7xl">
          Goodness
        </span>

        <span className="block italic text-orange-600 text-3xl sm:text-4xl lg:text-6xl mt-2">
          in Every Drop.
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-xl text-yellow-300 max-w-md lg:max-w-lg leading-relaxed">
        Premium wellness extracts made from India's finest spices,
        herbs and botanicals.
      </p>

      {/* Button */}
      <Link
        href="/products"
        className="inline-block bg-primary text-white px-5 py-3 sm:px-6 sm:py-3 rounded font-semibold text-sm sm:text-base"
      >
        Explore Products
      </Link>

    </div>
  </div>
</div>
    </section>
  );
}