import React from "react";
import { TestimonialData } from "@/lib/testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8" id="testimonials">
      <h1 className="text-4xl mt-9 text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
        What My Past Client Said About Me!
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row sm:flex-wrap">
        {TestimonialData.map((d: any, i: number) => (
          <TestimonialCard
            key={i}
            clientName={d.clientName}
            clientImageSrc={d.clientImageSrc}
            clientOccupation={d.clientOccupation}
            quote={d.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
