import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile-cleaned.png';
import chipBg from '../assets/chip-bg.png';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setVideoPlayed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden px-6 md:px-20 pt-32 pb-20">
      {/* Background */}
      {!videoPlayed ? (
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/chip-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src={chipBg}
          alt="Chip Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
        />
      )}

      {/* Main Hero Content */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Text Block */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="animate-blink text-green-400">Aspiring DV Engineer</p>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hello I'm <span className="text-green-400">Abhinav</span> Reddy Mosali
          </h1>
          <p className="text-gray-400 max-w-xl">
            I’m a Design Verification Engineer who enjoys breaking digital designs on purpose to make them stronger. 
            With a passion for UVM-based testbenches, constrained-random testing, and deep RTL debug, I turn waveform chaos 
            into coverage closure — ensuring your silicon behaves before it breathes.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center space-x-6 mt-6 text-green-400 text-xl">
            <a href="mailto:abhinavreddy.1989221@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/MosaliAbhinavReddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinavmosali/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="/AbhinavReddyResume.pdf"
              download
              className="hover:text-white transition-colors"
            >
              <FaFilePdf />
            </a>
            <span className="flex items-center gap-2 text-base text-gray-400 mt-2">
              <FaMapMarkerAlt className="text-green-400" /> Syracuse, NY
            </span>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[30rem] h-[30rem] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)] animate-pulse z-0" />
            <div className="absolute inset-0 pointer-events-none z-20"/>
            <img
              src={profile}
              alt="Abhinav Reddy Mosali's profile"
              className="w-[30rem] h-[30rem] object-contain z-10 mix-blend-lighten opacity-95"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      {showContent && (
        <div className="relative z-10 mt-20 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white font-mono text-lg">
            <div>
              <p className="animate-blink text-green-400 text-4xl font-bold text-green-400">1.5</p>
              <p className="text-gray-400 mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="animate-blink text-green-400 text-4xl font-bold text-green-400">3</p>
              <p className="text-gray-400 mt-1">Fields Explored</p>
            </div>
            <div>
              <p className="animate-blink text-green-400 text-4xl font-bold text-green-400">15</p>
              <p className="text-gray-400 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="animate-blink text-green-400 text-4xl font-bold text-green-400">791</p>
              <p className="text-gray-400 mt-1">Hours Spent Debugging</p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/abhinavmosali/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-300"
          >
          Hire Me
          </a>
        </div>
      )}
    </section>
  );
}