import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="get-started"
      className="py-24 bg-black text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold">
          Ready to Build Something Great?
        </h2>
        <p className="mt-4 text-gray-300">
          Let’s collaborate and bring your idea to life with Sammunat.
        </p>
        <a
          href="#"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
