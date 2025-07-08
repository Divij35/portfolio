'use client';

import { useState } from 'react';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Searchbar from '@/components/Searchbar';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (project.tags && project.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-300">Projects</h1>

      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="text-slate-500 col-span-full text-center text-xl">No projects found.</p>
        )}
      </div>
    </div>
  );
}
