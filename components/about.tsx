import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaPython, FaNodeJs, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiTensorflow, SiDocker, SiMongodb } from "react-icons/si";
import TypewriterParagraph from "./TypewriterParagraph";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="about" className="py-20 px-8 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <TypewriterParagraph/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-4 items-center justify-items-center"
        >
            <FaReact className="text-blue-500 text-4xl mb-2" />
            <FaPython className="text-blue-500 text-4xl mb-2" />
            <SiTailwindcss className="text-teal-400 text-4xl mb-2" />
            <FaJsSquare className="text-yellow-400 text-4xl mb-2" />
            <SiTypescript className="text-blue-600 text-4xl mb-2" />
            <SiTensorflow className="text-orange-600 text-4xl mb-2" />
            <FaNodeJs className="text-green-500 text-4xl mb-2" />
            <FaGitAlt className="text-red-600 text-4xl mb-2" />
            <SiNextdotjs className="text-white text-4xl mb-2" />
            <FaCss3Alt className="text-blue-500 text-4xl mb-2" />
            <SiDocker className="text-blue-500 text-4xl mb-2" />
            <SiMongodb className="text-green-500 text-4xl mb-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
