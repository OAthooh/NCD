import React from 'react';
import WelcomeHeader from '../components/dashboard/patient/WelcomeHeader';
import HealthMetrics from '../components/dashboard/patient/HealthMetrics';
import MedicationSchedule from '../components/dashboard/patient/MedicationSchedule';
import AppointmentList from '../components/dashboard/patient/AppointmentList';

const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <WelcomeHeader
          patientName="John Doe"
          appointmentCount={2}
          notificationCount={3}
        />
        <HealthMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MedicationSchedule />
          <AppointmentList />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;