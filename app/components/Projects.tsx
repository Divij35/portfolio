import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  return (
    <div id="projects" className="py-24 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#8b5cf6]">Projects</h2>
      <Parallax speed={5}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </Parallax>
    </div>
  );
}
