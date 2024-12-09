import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Scale, Droplets } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  status: 'normal' | 'warning' | 'critical';
  data: Array<{ value: number; date: string }>;
  index: number;
}

const statusColors = {
  normal: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  critical: 'bg-red-100 text-red-800',
};

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon,
  status,
  data,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg ${statusColors[status]}`}>
            {icon}
          </div>
          <h3 className="ml-3 font-semibold text-gray-700">{title}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="flex items-baseline mb-4">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="ml-1 text-gray-500">{unit}</span>
      </div>
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

const HealthMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      icon: <Heart className="w-5 h-5" />,
      status: 'normal' as const,
      data: Array.from({ length: 7 }, (_, i) => ({
        value: 120 + Math.random() * 10,
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      })),
    },
    {
      title: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      icon: <Activity className="w-5 h-5" />,
      status: 'normal' as const,
      data: Array.from({ length: 7 }, (_, i) => ({
        value: 72 + Math.random() * 10,
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      })),
    },
    {
      title: 'Weight',
      value: '70',
      unit: 'kg',
      icon: <Scale className="w-5 h-5" />,
      status: 'warning' as const,
      data: Array.from({ length: 7 }, (_, i) => ({
        value: 70 + Math.random() * 2,
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      })),
    },
    {
      title: 'Glucose',
      value: '95',
      unit: 'mg/dL',
      icon: <Droplets className="w-5 h-5" />,
      status: 'normal' as const,
      data: Array.from({ length: 7 }, (_, i) => ({
        value: 95 + Math.random() * 10,
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      })),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={metric.title} {...metric} index={index} />
      ))}
    </div>
  );
};

export default HealthMetrics;