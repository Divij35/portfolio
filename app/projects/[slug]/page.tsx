import projects from '@/data/projects';
import getimageUrl from '@/utils/image';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function getProject(slug: string) {
  const project = projects.find((project) => project.slug === slug);
  return project;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="prose mx-auto py-10 px-4 max-w-4xl text-white">
      <div className="relative w-full h-[300px] mb-6 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={getimageUrl(project.image)}
          alt={project.title}
          fill
          className="object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h1 className="text-4xl font-extrabold text-gray-100 mb-4">{project.title}</h1>
      <p className="text-lg text-gray-300">{project.description}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-200 mb-2">About this project</h2>
        <p className="text-base text-gray-300">{project.content}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-600 text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            View Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            View Live
          </a>
        )}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, index) => (
            <div key={index} className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={getimageUrl(img)}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
