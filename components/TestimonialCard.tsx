import React, { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface TestimonialCardProps {
  className?: string;
  ratingCount?: number;
  quote: string;
  clientName: string;
  clientOccupation: string;
  clientImageSrc: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  className = "",
  ratingCount = 5,
  quote,
  clientName,
  clientOccupation,
  clientImageSrc,
}) => {
  return (
    <Card className={`shadow-2xl  w-[350px] border-none    ${className}`}>
      <div className="flex flex-colrounded-md bg-white">
        <div className="flex flex-1 flex-col justify-between">
          <CardHeader>
            <div className="flex space-x-2">
              {Array.from({ length: ratingCount }).map((_, i) => (
                <span key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex-1">
              <blockquote>
                <p className="text-lg text-gray-800">{quote}</p>
              </blockquote>
            </div>

            <div className=" border-gray-300 dark:border-gray-800">
              <div className="flex items-center mt-4 gap-3">
                {/* <img
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src={clientImageSrc}
                  alt=""
                /> */}
                <div className="ml-3 min-w-0">
                  <p className="truncate text-base font-semibold text-gray-800">
                    {clientName}
                  </p>
                  <p className="truncate text-base text-gray-500">
                    {clientOccupation}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
