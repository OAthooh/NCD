import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Join the NCD Management Revolution Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            Transform the way you manage non-communicable diseases with our innovative platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Sign Up Now
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div>
              <a
                href="#login"
                className="inline-block mt-4 text-blue-100 hover:text-white transition-colors underline"
              >
                Already a member? Log In
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;