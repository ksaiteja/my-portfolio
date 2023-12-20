"use client";

import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  githubLink,
}) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-md md:shadow-xl">
      <figure>
        <div className="flex flex-row space-x-4 md:space-x-6 bg-blue-200 py-6 md:py-10 w-full items-center justify-center">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image-${index}`}
              width={40}
              height={40}
            />
          ))}
        </div>
      </figure>
      <div className="card-body">
        <Link href={githubLink}>
          <h2 className="card-title text-sm md:text-lg">{title}</h2>
        </Link>
        <p className="text-xs md:text-sm">{description}</p>
        <a href={githubLink}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-xs md:text-sm">
              GitHub
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
