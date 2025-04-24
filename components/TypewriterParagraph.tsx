import { motion } from "framer-motion";

const paragraph =
  "Hello! I'm Divij, a passionate Computer Science student with a strong interest in web development and artificial intelligence. Over the past few years, I've immersed myself in building web applications and exploring the complexities of AI and machine learning. My journey began with a fascination for how things work behind the scenes, and this curiosity has led me to focus on projects that involve both the development of user-friendly applications and the integration of intelligent systems. I'm always excited to learn new technologies and tools to improve my skill set and bring ideas to life. Currently, I'm exploring Natural Language Processing (NLP) and enhancing my expertise in building scalable, efficient web applications. When I'm not coding, I enjoy staying updated on the latest trends in tech, contributing to open-source projects, and collaborating with like-minded individuals on innovative projects. My ultimate goal is to leverage my skills to create applications that make a positive impact and contribute to the growth of technology in meaningful ways. Whether it's building a smarter web app or designing an AI model, I'm always eager to take on new challenges and expand my horizons.";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypewriterParagraph = () => {
  const words = paragraph.split(" ");

  return (
    <motion.div
      className="text-zinc-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterParagraph;
