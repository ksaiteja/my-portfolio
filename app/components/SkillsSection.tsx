import React from "react";

interface SkillsSectionProps {
  title: string;
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-xl underline">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {skills.map((element: string, index: number) => (
          <div key={index} className="flex flex-col space-y-4 items-center p-3">
            <img
              src={`/skills_logos/${element}.svg`}
              alt={`${element} Logo`}
              className="w-16 h-16"
              width={20}
              height={20}
            />
            <div>
              <p className="text-md text-gray-500 dark:text-white">
                {element.replace("-", " ").toUpperCase()}
              </p>
              {/* Add other information, such as job title or skills */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
