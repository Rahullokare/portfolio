// Import necessary modules
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons";

// Define interfaces
interface Language {
  icon?: IconType;
  languageName: string;
  color: string;
}

interface WhatIKnowCardProps {
  title: string;
  languages: Language[];
}

// Define the WhatIKnowCard component
const WhatIKnowCard: React.FC<WhatIKnowCardProps> = ({ title, languages }) => {
  return (
    <div className="mb-8">
      <Card className="w-full md:w-[400px] mx-auto">
        <CardHeader className="pb-3">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="grid grid-cols-3 gap-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {languages.map((d: Language, i: number) => (
              <div
                key={i}
                className="flex  items-center justify-center flex-col p-3 border rounded-md transition-all hover:bg-accent hover:text-accent-foreground"
              >
                {d.icon && (
                  <d.icon color={d.color} size={40} className="mb-2" />
                )}
                <p className="text-sm font-medium leading-none text-center">
                  {d.languageName}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatIKnowCard;
