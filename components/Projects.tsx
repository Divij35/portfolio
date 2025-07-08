import projects from '@/data/projects';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-36">
        <div className="text-center mb-8" id='projects'>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
        <button className="bg-gradient-to-br from-purple-400 to-orange-700 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out text-lg font-semibold">
  View All Projects
</button>

        </Link>
      </div>
    </div>
  );
}
