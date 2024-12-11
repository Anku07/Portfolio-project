import React from "react";

type SkillBarProps = {
  skill: string;
  percentage: number;
};

const SkillBar = ({ skill, percentage }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-gray-600">{percentage}%</span>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full">
      <div
        className="h-2.5 bg-blue-600 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JAVASCRIPT", percentage: 75 },
    { name: "REACT", percentage: 80 },
    { name: "NEXTJS", percentage: 90 },
    { name: "BOOTSTRAP", percentage: 85 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
        <div className="flex justify-center items-center gap-1 mb-6">
          <div className="h-0.5 w-12 bg-gray-300"></div>
          <div className="h-0.5 w-12 bg-blue-600"></div>
          <div className="h-0.5 w-12 bg-gray-300"></div>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            skill={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
