import { motion } from "framer-motion";

// 1. Data defined locally for the component
const features = [
  {
    title: "Modern Tech Stack",
    desc: "We leverage React, Next.js, and scalable cloud architectures to build resilient digital foundations.",
  },
  {
    title: "Clean UI/UX",
    desc: "Premium aesthetics meet functional design, ensuring your users enjoy a seamless, high-end experience.",
  },
  {
    title: "Agile Delivery",
    desc: "Speed without compromise. We follow rigorous standards to deliver your vision with precision.",
  },
];

// Features.jsx Snippet
export default function Features() {
  return (
    <section className="py-32 bg-[#FAF9F6] dark:bg-[#0A0A0B] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-slate-200 dark:border-white/10">
          {features.map((f, i) => (
            <div key={i} className="p-12 bg-white dark:bg-[#0E0E10] border-r border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-[#161618] transition-all duration-500">
              <span className="text-[10px] text-slate-400 dark:text-slate-600 mb-8 block">0{i+1}</span>
              <h3 className="text-xl font-serif dark:text-white mb-4">{f.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}