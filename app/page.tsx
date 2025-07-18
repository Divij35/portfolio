'use client';
import { motion } from 'framer-motion';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Parallax } from 'react-scroll-parallax';
import About from '@/components/about';
import HashnodeSection from '@/components/HashnodeSection';

export default function Home() {
  return (
      <main className=" min-h-screen pt-20 text-white px-6 py-12 flex flex-col justify-center items-center">
        <section className='h-screen flex flex-col justify-center items-center'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-[#8b5cf6] tracking-wide uppercase"
        >
          Building Magic with AI + Full Stack
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl text-center font-bold mt-4"
        >
          Designing Smarter <br />
          <span className="text-[#8b5cf6]">Digital Experiences</span>
        </motion.h1>

        <p className="mt-6 text-[#cfcfcf] max-w-xl text-center">
          Hi! I'm Divij, a developer blending AI intelligence with stunning frontend & backend solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 rounded text-white font-semibold shadow-lg"
          >
            Featured Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1V0QgpH_YP2E9jucU5BC0Hrhtnea2lgzW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#8b5cf6] px-6 py-3 rounded text-[#8b5cf6] font-semibold hover:bg-[#8b5cf6] hover:text-white transition"
          >
            Resume
          </a>
        </div>
        </section>
        <Parallax speed={-10} >
          <About />
        </Parallax>
        <Parallax speed={10} >
          <Projects />
        </Parallax>
        <Parallax speed={10} >
          <HashnodeSection />
        </Parallax>
        <Parallax speed={10} >
          <Contact/>
        </Parallax>
      </main>
  );
}
