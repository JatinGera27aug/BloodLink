import React from 'react';
import { greenTick } from '../assets';
const PreviousAppointment = () => {
  // Sample data for previous appointments
  const previousAppointments = [
    { id: 1, date: '2024-03-10', location: 'Community Center', status: 'Completed' },
    { id: 2, date: '2024-02-15', location: 'Red Cross Center', status: 'Completed' },
    { id: 3, date: '2024-01-20', location: 'Hospital XYZ', status: 'Completed' },
  ];

  return (
    <div className="overflow-x-auto">
        <h1 className='my-4 text-left font-bold text-lg'>Your Previous Appointments</h1>
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-red-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {previousAppointments.map(appointment => (
            <tr key={appointment.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">{appointment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">{appointment.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">
                {appointment.status === 'Completed' && (
                  <img src={greenTick} alt='green-tick' className='h-5 w-5 inline mr-4'/>)}
                {appointment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousAppointment;
