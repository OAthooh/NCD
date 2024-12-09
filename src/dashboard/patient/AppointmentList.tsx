import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, User, MapPin } from 'lucide-react';
import Button from '../../ui/Button';

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  type: 'virtual' | 'in-person';
  location?: string;
}

const appointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    date: '2024-03-15',
    time: '10:00',
    type: 'virtual',
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Chen',
    specialty: 'Endocrinologist',
    date: '2024-03-20',
    time: '14:30',
    type: 'in-person',
    location: 'Medical Center, Room 205',
  },
];

const AppointmentList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Upcoming Appointments
          </h2>
        </div>
        <Button variant="secondary" className="text-sm">
          Schedule New
        </Button>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100">
                {appointment.type === 'virtual' ? (
                  <Video className="w-5 h-5 text-blue-600" />
                ) : (
                  <User className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">
                  {appointment.doctorName}
                </h3>
                <p className="text-sm text-gray-600">{appointment.specialty}</p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(appointment.date).toLocaleDateString()} at{' '}
                  {appointment.time}
                </div>
                {appointment.location && (
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {appointment.location}
                  </div>
                )}
              </div>
            </div>
            <Button
              variant={appointment.type === 'virtual' ? 'primary' : 'secondary'}
              className="text-sm"
            >
              {appointment.type === 'virtual' ? 'Join Call' : 'View Details'}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AppointmentList;