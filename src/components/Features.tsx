import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Stethoscope, Settings } from 'lucide-react';

const features = [
  {
    title: 'For Patients',
    icon: Users,
    description: 'Track your health metrics, manage medications, and stay connected with your healthcare providers.',
  },
  {
    title: 'For Providers',
    icon: Stethoscope,
    description: 'Access patient data in real-time, monitor progress, and make informed clinical decisions.',
  },
  {
    title: 'For Admins',
    icon: Settings,
    description: 'Manage user access, analyze platform usage, and ensure data security compliance.',
  },
];

const FeatureCard = ({ title, icon: Icon, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-blue-100 rounded-full mb-4">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Features Designed for Patients, Providers, and Admins
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;