import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiTensorflow, SiDocker, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-zinc-300 text-lg mb-6 max-w-3xl mx-auto">
            Hello! I'm Divij, a passionate Computer Science student with a strong interest in 
            web development and artificial intelligence. Over the past few years, I've immersed 
            myself in building web applications and exploring the complexities of AI and machine learning. 
            My journey began with a fascination for how things work behind the scenes, and this curiosity 
            has led me to focus on projects that involve both the development of user-friendly applications 
            and the integration of intelligent systems.

            I'm always excited to learn new technologies and tools to improve my skill set and bring ideas to life. 
            Currently, I'm exploring Natural Language Processing (NLP) and enhancing my expertise in building 
            scalable, efficient web applications. When I'm not coding, I enjoy staying updated on the latest trends 
            in tech, contributing to open-source projects, and collaborating with like-minded individuals on innovative projects.

            My ultimate goal is to leverage my skills to create applications that make a positive impact and contribute 
            to the growth of technology in meaningful ways. Whether it's building a smarter web app or designing 
            an AI model, I'm always eager to take on new challenges and expand my horizons.
          </p>
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
