import React from 'react';

const BloodDonationTable = () => {
  return (
    <div className="overflow-x-auto">
        <h1 className='py-4 font-bold '>Compatible Blood Type Donors</h1>
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-red-100">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border border-red-300">
              Blood Type
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border border-red-300">
              Can Donate To
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border border-red-300">
              Can Receive From
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">A+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, AB+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, A-, O+, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">A-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, A-, AB+, AB-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A-, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">B+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">B+, AB+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">B+, B-, O+, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">B-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">B+, B-, AB+, AB-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">B-, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">AB+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">AB+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, A-, B+, B-, AB+, AB-, O+, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">AB-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">AB+, AB-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A-, B-, AB-, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">O+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, B+, AB+, O+</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">O+, O-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">O-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">A+, A-, B+, B-, AB+, AB-, O+, O-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">O-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodDonationTable;
