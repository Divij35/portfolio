'use client';
import { motion } from "framer-motion";
import getimageUrl from "@/utils/image";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-tr from-purple-700 to-indigo-600 text-white p-6 rounded-xl shadow-xl transform transition-all hover:shadow-2xl"
    >
      <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden">
        <Image
          src={getimageUrl(image)}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-3 text-gray-100">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="bg-white text-indigo-700 text-xs px-2 py-1 rounded-full font-semibold">
            #{tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
