import React from 'react'

const CampRegister = () => {
    const upcomingCamps = [
        { id: 1, name: 'Blood Drive 2024', address: '123 Main St, Cityville', date: '2024-04-15' },
        { id: 2, name: 'Red Cross Blood Donation Camp', address: '456 Elm St, Townsville', date: '2024-04-20' },
        { id: 3, name: 'Community Blood Donation Event', address: '789 Oak St, Villagetown', date: '2024-04-25' },
      ];
      const handleRegister = (campId) => {
        // Implement your registration logic here
        console.log('Register for camp with ID:', campId);
      };
  return (
    <div>
        <h1 className='my-4 text-left font-bold text-lg'>Upcoming Camps</h1>
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-red-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Camp Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-red-300">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-blue-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {upcomingCamps.map(camp => (
            <tr key={camp.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">{camp.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">{camp.address}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">{camp.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">
                <button onClick={() => handleRegister(camp.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-green-300">
                  Register
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CampRegister
