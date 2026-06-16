"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya",
    location: "Mangalore",
    review: "Excellent quality and amazing service.",
  },
  {
    name: "Rahul",
    location: "Bangalore",
    review: "Loved the collection and shopping experience.",
  },
  {
    name: "Anita",
    location: "Udupi",
    review: "Highly recommended for premium products.",
  },
  {
    name: "Sneha",
    location: "Mumbai",
    review: "Beautiful products and great customer support.",
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-950 shadow-lg rounded-full p-2"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden mx-12" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "{item.review}"
                </p>

                <h4 className="font-semibold mt-4">
                  {item.name}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-950 shadow-lg rounded-full p-2"
      >
        <ChevronRight size={20} className="text-white" />
      </button>
    </div>
  );
}