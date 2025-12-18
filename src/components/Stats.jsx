

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "60+" },
  { label: "Countries Served", value: "8+" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white dark:bg-[#0A0A0B] border-y border-slate-100 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {/* This span handles the text color change automatically */}
              <span className="text-6xl font-light tracking-tighter text-slate-900 dark:text-white transition-colors">
                {stat.value}
              </span>
              
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="w-8 h-[1px] bg-slate-200 dark:bg-white/10 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 font-sans font-medium">
                  {stat.label}
                </span>
                <div className="w-8 h-[1px] bg-slate-200 dark:bg-white/10 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}