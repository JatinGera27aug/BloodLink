import React from 'react';

const BloodBankTable = ({ showBloodBanks }) => {
    const handleSendDetails = (bankDetails) => {
        // Assuming details is an object containing all the necessary information
        // You can customize this function based on your actual data structure
        console.log("Sending details to blood bank:", bankDetails);
        // Here you can implement the logic to send details to the blood bank
    };
    const details = [
        {
            name: 'Blood Bank 1',
            location: 'City A, District X',
            contact: '123-456-7890'
        },
        {
            name: 'Blood Bank 2',
            location: 'City B, District Y',
            contact: '987-654-3210'
        }
        // Add more dummy data as needed
    ];
    return (
        <div>
            {showBloodBanks && (
                <div className="mt-8">
                    {/* Blood banks table */}
                    <h3 className="text-2xl font-bold text-black pb-3">Available Blood Banks</h3>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((bankDetails, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">{bankDetails.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">{bankDetails.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">{bankDetails.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-300">
                                        <button onClick={() => handleSendDetails(bankDetails)} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
                                            Send Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BloodBankTable;
