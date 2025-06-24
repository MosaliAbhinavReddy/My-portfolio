import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';

const projects = [
  {
    title: "Instruction-Level UVM Verification of RISC-V Core",
    description:
      "Developed a modular UVM testbench from scratch to verify a 32-bit RISC-V core, implementing directed and constrained-random instruction sequences, functional coverage models, assertions for pipeline behavior, and regression automation.",
    tech: ["SystemVerilog", "UVM", "ModelSim", "Verilator", "Git", "RISC-V ISA"],
  },
  {
    title: "MESI-Based Multicore L1 Cache Verification",
    description:
      "Built a modular UVM environment to verify L1 cache coherence using the MESI protocol under multicore access scenarios, applying randomized access patterns and functional coverage to improve verification completeness.",
    tech: ["SystemVerilog", "UVM", "ModelSim", "Functional Coverage"],
  },
  {
    title: "HTAX Crossbar Functional Verification",
    description:
      "Developed a layered UVM testbench to validate HTAX crossbar arbitration, routing, and data ordering across multi-initiator configurations using protocol-aware monitors, assertions, and randomized testing.",
    tech: ["SystemVerilog", "UVM", "Assertions", "ModelSim"],
  },
  {
    title: "Design and Verification of 1x3 Packet Router",
    description:
      "Designed a 1x3 packet router in Verilog with FSM-based control logic and developed a layered UVM testbench to verify data integrity, routing correctness, and functional coverage through randomized and directed test scenarios.",
    tech: ["Verilog", "SystemVerilog", "UVM", "ModelSim", "FSM Design", "Functional Coverage"],
  },
  {
    title: "APB Protocol Verification Using UVM",
    description:
      "Developed a modular UVM environment to verify APB protocol compliance, covering read/write transactions, wait states, error signaling, with protocol-aware monitors, assertions, functional coverage, and Python automation.",
    tech: ["SystemVerilog", "UVM", "ModelSim", "Assertions", "Functional Coverage", "APB Protocol", "Python"],
  },
  {
    title: "FPGA-Based Secure IoT Communication",
    description:
      "Designed AES-encryption RTL in Verilog for secure MQTT communication on an Artix-7 FPGA. Integrated with Python-based sensors.",
    tech: ["Verilog", "MQTT", "Python", "Artix-7 FPGA"],
  },
  {
    title: "MIPS Processor RTL & Verification",
    description:
      "Implemented a MIPS 5-stage pipelined processor in Verilog and validated with testbenches simulating instruction memory execution.",
    tech: ["Verilog", "FSM", "Instruction Memory", "Simulation"],
  },
  {
    title: "RTL Design of Floating Point Multiplication Unit",
    description:
      "Designed an IEEE-754 compliant floating-point multiplier unit, implementing sign, exponent, and mantissa logic with normalization, rounding, exception handling, and pipelined datapath control using SystemVerilog RTL.",
    tech: ["SystemVerilog", "ModelSim", "IEEE-754 Standard", "RTL Simulation"],
  },
  {
    title: "FPGA-Based Dynamic Traffic Light Controller",
    description:
      "Designed a parameterized FSM-based traffic light controller in Verilog with dynamic timing logic, clock gating for power optimization, IDLE/SLEEP state transitions, synthesized design for FPGA deployment and functional validation.",
    tech: ["Verilog", "FSM Design", "Clock Gating", "FPGA Implementation"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />
      <motion.div
        className="max-w-5xl mx-auto mt-32 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🔬 Projects
        </motion.h2>

        <div className="grid gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-green-400 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-green-300">
                {proj.tech.map((tech, j) => (
                  <span key={j} className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}