export function InlineCTA() {
  return (
    <div className="py-12 bg-[#FAF9F6] dark:bg-[#0E0E10] border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-6">
        <h3 className="text-lg font-serif italic dark:text-slate-300">Ready to transform your digital presence?</h3>
        <a href="#contact" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
          Start a Project
        </a>
      </div>
    </div>
  );
}