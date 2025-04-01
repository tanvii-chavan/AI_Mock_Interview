"use client"; // Ensure this is a Client Component

import { useEffect, useState } from "react";
import { getTechLogos } from "@/lib/utils";

const DisplayTechIcons = ({ techStack }: { techStack?: string[] }) => {
  const [techIcons, setTechIcons] = useState<{ name: string; logoUrl: string }[]>([]);

  useEffect(() => {
    if (!techStack) {
      console.error("Tech stack is undefined in DisplayTechIcons");
      return;
    }

    getTechLogos(techStack).then(setTechIcons);
  }, [techStack]);

  return (
    <div className="flex">
      {techIcons.map((tech) => (
        <img key={tech.name} src={tech.logoUrl} alt={tech.name} />
      ))}
    </div>
  );
};

export default DisplayTechIcons;
