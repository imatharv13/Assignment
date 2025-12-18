import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="pt-44 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Typography */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-medium mb-8 block">
              EST. 2024 — Digital Excellence
            </span>
           
<h1 className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight text-slate-900 dark:text-white mb-10 transition-colors">
  Building Smart <br /> 
  <span className="italic font-light text-slate-500 dark:text-slate-400">Digital Solutions.</span>
</h1>
<p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed mb-12 font-light">
  We partner with forward-thinking brands...
</p>
            <div className="flex items-center gap-10">
              <a href="#get-started" className="px-10 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-slate-800 transition-all duration-500">
                Inquire Now
              </a>
              <a href="#features" className="group text-sm tracking-widest uppercase font-semibold flex items-center gap-2">
                Our Philosophy 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
                alt="Workspace"
                className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-[2s]"
              />
            </div>
            {/* Minimalist Floating Label */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl hidden xl:block border border-slate-100">
              <p className="text-xs uppercase tracking-tighter text-slate-400 mb-1 font-bold">Current Status</p>
              <p className="text-sm font-serif italic text-slate-800 italic">Available for Q1 2025 Projects</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}