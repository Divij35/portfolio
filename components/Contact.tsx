import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact? 👋</h2>
<p className="text-lg mb-8 text-zinc-300">
I bring ideas to life with clean code, creativity, and a passion for solving problems. Let's chat — if you're looking for someone who delivers, I'm ready when you are.
</p>

      
      <a
        href="mailto:pirankardivij@example.com"
        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-300 mb-6"
      >
        <FaEnvelope size={20} /> Say Hello
      </a>

      <div className="flex justify-center gap-6 mt-4 text-zinc-300">
        <a href="https://www.linkedin.com/in/divij-pirankar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/divij35" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaGithub size={28} />
        </a>
        <a href="https://x.com/DivijPirankar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaTwitter size={28} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
