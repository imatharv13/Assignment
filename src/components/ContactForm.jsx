import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#0A0A0B] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Text */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 font-bold mb-6 block">
            Get in Touch
          </span>
          <h2 className="text-5xl font-serif text-slate-900 dark:text-white mb-8">
            Let’s start a <br />
            <i className="italic font-light text-slate-500">conversation.</i>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Whether you have a fully-formed idea or just the beginnings of a vision, we’re here to help you build it.
          </p>
          
          <div className="mt-12 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Email us</p>
              <a href="mailto:hello@sammunat.com" className="text-lg dark:text-white border-b border-transparent hover:border-black dark:hover:border-white transition-all">hello@sammunat.com</a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative group">
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-700 text-slate-900 dark:text-white" />
            </div>
            <div className="relative group">
              <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-700 text-slate-900 dark:text-white" />
            </div>
          </div>
          
          <div className="relative group">
            <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-700 text-slate-900 dark:text-white resize-none"></textarea>
          </div>

          <button className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-semibold text-slate-900 dark:text-white">
            Send Message
            <span className="w-12 h-[1px] bg-slate-900 dark:bg-white group-hover:w-20 transition-all duration-500"></span>
          </button>
        </motion.form>

      </div>
    </section>
  );
}