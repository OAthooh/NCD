import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Activity, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'HIPAA & GDPR Compliant',
    description: 'Your data is protected by industry-leading security standards and compliance measures.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Scalability',
    description: 'Built on modern cloud infrastructure to handle growing healthcare needs.',
  },
  {
    icon: Activity,
    title: 'Real-Time Insights',
    description: 'Get instant access to critical health data and analytics.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Design',
    description: 'Access your health information anytime, anywhere, on any device.',
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why Choose the NCD Management Platform?
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-blue-100 rounded-lg">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;