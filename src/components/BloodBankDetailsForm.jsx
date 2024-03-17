import React, { useState } from 'react';

const BloodBankDetailsForm = ({ onSubmit }) => {
    const [bloodBankName, setBloodBankName] = useState('');
    const [parentHospitalName, setParentHospitalName] = useState('');
    const [category, setCategory] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ bloodBankName, parentHospitalName, category, contactPerson, email, contactNumber, licenseNumber, fromDate, toDate });
    };

    return (
        <div className='border border-slate-500 p-4 w-full mx-10 rounded-md flex justify-center'>
            <form onSubmit={handleSubmit} className="w-full">
                <h3 className="text-xl font-semibold mb-4 text-center">Blood Bank Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="bloodBankName" className="block text-left text-sm font-medium text-gray-700 mb-1">Blood Bank Name*</label>
                        <input
                            type="text"
                            id="bloodBankName"
                            placeholder="Blood Bank Name"
                            value={bloodBankName}
                            onChange={(e) => setBloodBankName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="parentHospitalName" className="block text-left text-sm font-medium text-gray-700 mb-1">Parent Hospital Name*</label>
                        <input
                            type="text"
                            id="parentHospitalName"
                            placeholder="Parent Hospital Name"
                            value={parentHospitalName}
                            onChange={(e) => setParentHospitalName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-left text-sm font-medium text-gray-700 mb-1">Category*</label>
                        <input
                            type="text"
                            id="category"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactPerson" className="block text-left text-sm font-medium text-gray-700 mb-1">Contact Person*</label>
                        <input
                            type="text"
                            id="contactPerson"
                            placeholder="Contact Person"
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email*</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-left text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
                        <input
                            type="text"
                            id="contactNumber"
                            placeholder="Contact Number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="licenseNumber" className="block text-left text-sm font-medium text-gray-700 mb-1">License Number*</label>
                        <input
                            type="text"
                            id="licenseNumber"
                            placeholder="License Number"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="fromDate" className="block text-left text-sm font-medium text-gray-700 mb-1">From Date*</label>
                        <input
                            type="date"
                            id="fromDate"
                            placeholder="From Date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="toDate" className="block text-left text-sm font-medium text-gray-700 mb-1">To Date*</label>
                        <input
                            type="date"
                            id="toDate"
                            placeholder="To Date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-40 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4">Next</button>
            </form>
        </div>
    );
};

export default BloodBankDetailsForm;
