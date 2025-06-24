import { motion } from "framer-motion";

const skills = [
  "SystemVerilog", "Verilog", "C++", "Python", "TCL", "Shell Scripting", "Perl",
  "UVM", "Constrained-Random Testing", "Assertion-Based Verification",
  "Coverage-Driven Verification", "Scoreboarding", "Regression Automation", "Coverage Closure",
  "APB", "UART", "SPI", "I2C", "SoC Bus Protocols", "FSM-based Control Interfaces",
  "Synopsys VCS", "Cadence Xcelium", "ModelSim", "QuestaSim", "Verdi", "Vivado", "Git",
  "RTL Debugging", "Timing Analysis", "CDC", "Formal Verification", "Regression Analysis", "Waveform Debugging",
  "Microarchitecture", "Graphics Pipeline", "IP-Level Validation", "Power-Aware Verification",
  "Test Plan Development", "Cross-Team Collaboration"
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-10">🛠️ Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 text-white rounded-lg p-4 border border-gray-800 hover:border-green-400 hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}