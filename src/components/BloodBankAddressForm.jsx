import React, { useState } from 'react';

const BloodBankAddressForm = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ city, district, state });
    };

    return (
        <div className='border border-slate-500 p-4 w-full mx-10 rounded-md flex justify-center'>
            <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4 col-span-3 text-center">Blood Bank Address</h3>
                <div className="grid grid-cols-3 gap-4 col-span-3">
                    <div>
                        <label htmlFor="city" className="block text-left text-sm font-medium text-gray-700 mb-1">City*</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="district" className="block text-left text-sm font-medium text-gray-700 mb-1">District*</label>
                        <input
                            type="text"
                            id="district"
                            placeholder="District"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-left text-sm font-medium text-gray-700 mb-1">State*</label>
                        <input
                            type="text"
                            id="state"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-40 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4 col-span-3">Next</button>
            </form>
        </div>
    );
};

export default BloodBankAddressForm;
