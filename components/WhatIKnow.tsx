"use client";
import { WhatIKnowData } from "@/lib/WhatIKnowData";
import WhatIKnowCard from "./WhatIKnowCard";

export function WhatIKnow() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8" id="skill">
      <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
        What I Know!
      </h1>
      <div className="flex flex-col  justify-center gap-5 mt-8 sm:flex-row sm:flex-wrap">
        {WhatIKnowData.map((d: any, i: any) => (
          <WhatIKnowCard key={i} title={d.title} languages={d.languages} />
        ))}
      </div>
    </div>
  );
}
