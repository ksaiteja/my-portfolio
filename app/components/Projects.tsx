import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-fit px-4 md:px-20 py-4 md:py-10 dark:text-white"
    >
      <div className="flex flex-col space-y-4">
        <div className="mb-6 md:mb-10 w-full text-center">
          <h1 className="text-xl md:text-3xl w-fit border-4 border-black dark:border-white font-semibold mx-auto p-2 md:p-4">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <ProjectCard
            title={"Socialize"}
            description={
              "A community app where users can ask questions and get answers for other users."
            }
            images={["/skills_logos/flutter.svg", "/skills_logos/firebase.svg"]}
            githubLink={"https://github.com/ksaiteja/Socialize"}
          />
          <ProjectCard
            title={"Goal Quest"}
            description={
              "Users can set up their goal, track the progress and get suggestions"
            }
            images={["/skills_logos/flutter.svg", "/skills_logos/firebase.svg"]}
            githubLink={"https://github.com/ksaiteja/goal_quester"}
          />
          <ProjectCard
            title={"Real-time signal strength checker"}
            description={
              "Shows cellular network at various locations, suggests network."
            }
            images={["/skills_logos/flutter.svg", "/skills_logos/firebase.svg"]}
            githubLink={"https://github.com/ksaiteja/goal_quester"}
          />
          <ProjectCard
            title={"Real-time attendance posting based on face recognition"}
            description={
              "Teachers can give a picture of whole class and this project automaticall detects who are present and posts attendance"
            }
            images={[
              "/skills_logos/react.svg",
              "/skills_logos/django.svg",
              "/skills_logos/postgresql.svg",
            ]}
            githubLink={"https://github.com/ksaiteja/major_project_frontend"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
