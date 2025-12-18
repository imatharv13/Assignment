import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-40 bg-black text-white text-center overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
          Let’s build your <br /> <i className="font-light italic text-slate-500">legacy.</i>
        </h2>
        <a href="#contact" className="inline-block px-12 py-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 rounded-full text-sm uppercase tracking-widest">
          Work with Sammunat
        </a>
      </motion.div>
      
      {/* Decorative subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-white/[0.02] whitespace-nowrap pointer-events-none">
        Sammunat — 2025
      </div>
    </section>
  );
}