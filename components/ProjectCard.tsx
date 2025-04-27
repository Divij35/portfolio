import Link from 'next/link';
import getimageUrl from '@/utils/image';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    slug: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 bg-gradient-to-t from-gray-900 to-gray-700 cursor-pointer">
      <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden">
  <Image
    src={getimageUrl(project.image)}
    alt={project.title}
    fill
    className="object-cover rounded-xl"
  />
</div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">{project.title}</h2>
          <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
