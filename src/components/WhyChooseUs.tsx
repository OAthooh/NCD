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
    <section className="overflow-hidden relative py-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
      
      <div className="container relative px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-3xl font-bold text-center md:text-4xl"
        >
          Why Choose the NCD Management Platform?
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 gap-8 mx-auto max-w-5xl md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="p-3 bg-blue-100 rounded-lg">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
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