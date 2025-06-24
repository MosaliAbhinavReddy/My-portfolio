import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-400">
        I’m a Master’s student in Computer Engineering at Syracuse University,
        passionate about VLSI Design and Functional Verification. With hands-on
        experience in Verilog, SystemVerilog, and UVM, I specialize in building
        and verifying RTL designs for SoC and FPGA-based systems. My projects
        span from MIPS processor design to secure FPGA-based IoT systems. I
        thrive at the intersection of hardware and software.
      </p>
    </motion.section>
  );
}