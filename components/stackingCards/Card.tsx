import React, { useMemo } from "react";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle,
  HandHelping,
} from "lucide-react";

const Card: React.FC<{
  title: string;
  content: string;
  bullets: string[];
  icon: string;
}> = ({ title, content, bullets, icon }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case "book":
        return BookOpenCheck;
      case "heart":
        return HandHelping;
      case "briefcase":
        return BriefcaseBusiness;
      default:
        return null;
    }
  }, [icon]);
  return (
    <div className="border-gray-250 rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4">
        {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      </div>{" "}
      <h3 className="mb-4 flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
        <span>{title}</span>
      </h3>
      <p className="mb-8 text-gray-600 dark:text-gray-300">{content}</p>
      <ul className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 dark:text-gray-300">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex space-x-2">
            <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
