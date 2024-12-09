import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex relative justify-center items-center min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r mix-blend-multiply from-blue-600/90 to-blue-900/90" />
      
      {/* Content */}
      <div className="container relative px-4 mx-auto text-center">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
          >
            Transform Your Health with the{' '}
            <span className="text-blue-200">NCD Management Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-xl text-blue-50"
          >
            Empowering patients and healthcare providers to manage Non-Communicable
            Diseases with ease, precision, and real-time insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 justify-center sm:flex-row"
          >
            <button className="flex gap-2 justify-center items-center px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg transition-all transform hover:bg-blue-50 hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 font-semibold text-white rounded-lg border-2 border-white transition-all hover:bg-white/10">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;