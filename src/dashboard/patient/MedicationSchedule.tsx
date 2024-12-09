import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Clock, Check, X } from 'lucide-react';
import Button from '../../ui/Button';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  overdue: boolean;
}

const medications: Medication[] = [
  {
    id: '1',
    name: 'Metformin',
    dosage: '500mg',
    time: '08:00',
    taken: true,
    overdue: false,
  },
  {
    id: '2',
    name: 'Lisinopril',
    dosage: '10mg',
    time: '12:00',
    taken: false,
    overdue: true,
  },
  {
    id: '3',
    name: 'Aspirin',
    dosage: '81mg',
    time: '18:00',
    taken: false,
    overdue: false,
  },
];

const MedicationSchedule: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Pill className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Today's Medications
          </h2>
        </div>
        <Button variant="secondary" className="text-sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {medications.map((med) => (
          <motion.div
            key={med.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              med.overdue
                ? 'border-red-200 bg-red-50'
                : med.taken
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`p-2 rounded-full ${
                  med.overdue
                    ? 'bg-red-100'
                    : med.taken
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                }`}
              >
                {med.taken ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : med.overdue ? (
                  <X className="w-5 h-5 text-red-600" />
                ) : (
                  <Clock className="w-5 h-5 text-gray-600" />
                )}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">{med.name}</h3>
                <p className="text-sm text-gray-600">
                  {med.dosage} • {med.time}
                </p>
              </div>
            </div>
            {!med.taken && (
              <Button
                variant={med.overdue ? 'primary' : 'secondary'}
                className="text-sm"
              >
                Mark as Taken
              </Button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MedicationSchedule;