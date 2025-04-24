'use client';
import { motion } from "framer-motion";
import getimageUrl from "@/utils/image";

export default function ProjectCard({ title, description, image, tags, link }: any) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-tr from-purple-700 to-indigo-600 text-white p-6 rounded-xl shadow-xl transform transition-all hover:shadow-2xl"
    >
      <img src={getimageUrl(image)} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
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
