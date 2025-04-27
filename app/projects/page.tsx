import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my projects built with passion.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-300">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
