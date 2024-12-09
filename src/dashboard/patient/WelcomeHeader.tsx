import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

interface WelcomeHeaderProps {
  patientName: string;
  appointmentCount: number;
  notificationCount: number;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  patientName,
  appointmentCount,
  notificationCount,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, {patientName}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here's your health summary for today
          </p>
        </div>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Calendar className="w-6 h-6" />
            {appointmentCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {appointmentCount}
              </span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Bell className="w-6 h-6" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeHeader;