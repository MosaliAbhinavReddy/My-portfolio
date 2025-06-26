import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />
      <motion.section
        className="max-w-4xl mx-auto mt-40 px-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-400">
          I’m a recent graduate with a Master’s in Computer Engineering from Syracuse University, specializing in Design Verification.
           I have hands-on experience in SystemVerilog and UVM, with a strong foundation in writing testbenches,
            building reusable verification components, and achieving functional coverage closure.
             My work emphasizes verifying complex RTL designs for SoC and FPGA systems, and I thrive in debugging, constrained-random testing,
           and ensuring design correctness before tape-out.
        </p>
      </motion.section>
      
<section className="mt-12 px-6 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>

  {[
  {
    title: "Graduate Design Verification Intern – Syracuse University",
    date: "Jun 2025 – Present",
    details: "Leading instruction-level UVM verification of RISC-V cores, including ALU and branching logic. Developing constrained-random tests, assertions, and coverage models to drive coverage closure and functional completeness."
    },
  {
    title: "Design Verification Engineer – Fabsilica Technologies",
    date: "Jul 2022 - Jun 2023",
    details: "Built modular UVM environments to verify SoC IPs. Focused on register interface validation, protocol assertions, and automated regression analysis. Supported waveform debug and test planning across subsystems."
  },
  {
    title: "Design Verification Intern – DRDO, India",
    date: "Jan 2022 – Jun 2022",
    details: "Worked on ASIC design and functional verification for control modules using SystemVerilog and UVM. Developed RTL for FSM-based logic, validated APB protocol handshakes, and assisted in FPGA bring-up using Vivado."
  }]
    .map((item, index) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        key={index}
        className="mb-4 p-4 rounded-lg border border-gray-800 hover:border-green-400 transition duration-300 bg-[#111] shadow-md"
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h3 className="text-lg text-green-400 font-semibold">{item.title}</h3>
          <span className="text-sm text-gray-400">{item.date}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-300 text-sm transition-all duration-300">
            {item.details}
          </p>
        )}
      </div>
    );
  })}
</section>
      <Footer />
    </div>
    
  );
  
}