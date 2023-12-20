import React from "react";
import SkillsSection from "./SkillsSection";

const MySkills = () => {
  return (
    <div
      id="myskills"
      className="flex flex-col bg-blue-100 dark:bg-gray-800 dark:text-white w-full h-fit px-5 py-10 pt-24 lg:px-10"
    >
      <div className="flex flex-col space-y-4">
        <div className="mb-10 w-full text-center">
          <h1 className="text-3xl w-fit border-4 border-black dark:border-white font-semibold mx-auto p-4">
            My Skills
          </h1>
        </div>
        <p className="text-2xl font-medium">Technical Proficiencies</p>
        <div className="flex flex-col space-y-10">
          <SkillsSection
            title={"Programming languages"}
            skills={[
              "javascript",
              "python",
              "java",
              "c",
              "cpp",
              "html",
              "css",
              "dart",
            ]}
          />
          <SkillsSection
            title={"Web development"}
            skills={[
              "react",
              "express-js",
              "nodejs",
              "django",
              "java-spring-boot",
              "next-js",
              "redux",
              "tailwind-css",
            ]}
          />
          <SkillsSection
            title={"App development"}
            skills={["flutter", "react-native", "android-studios"]}
          />
          <SkillsSection
            title={"Database Management"}
            skills={["mongodb", "mysql", "postgresql", "firebase"]}
          />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
