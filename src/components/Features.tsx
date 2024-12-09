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

interface FeatureCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  index: number;
}

const FeatureCard = ({ title, icon: Icon, description, index }: FeatureCardProps) => {
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
      className="p-6 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 mb-4 bg-blue-100 rounded-full">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center md:text-4xl"
        >
          Features Designed for Patients, Providers, and Admins
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;