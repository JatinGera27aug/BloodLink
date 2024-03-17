import React, { useState } from 'react';

const PostalAddressForm = ({ onSubmit }) => {
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [pinCode, setPinCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ addressLine1, addressLine2, pinCode });
    };

    return (
        <div className='border border-slate-500 p-4 w-full mx-10 rounded-md flex justify-center'>
            <form onSubmit={handleSubmit} className="w-full">
                <h3 className="text-xl font-semibold mb-4 text-center">Postal Address</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="addressLine1" className="block text-left text-sm font-medium text-gray-700 mb-1">Address Line 1*</label>
                        <input
                            type="text"
                            id="addressLine1"
                            placeholder="Address Line 1"
                            value={addressLine1}
                            onChange={(e) => setAddressLine1(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="addressLine2" className="block text-left text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                        <input
                            type="text"
                            id="addressLine2"
                            placeholder="Address Line 2"
                            value={addressLine2}
                            onChange={(e) => setAddressLine2(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="pinCode" className="block text-left text-sm font-medium text-gray-700 mb-1">Pin Code*</label>
                        <input
                            type="text"
                            id="pinCode"
                            placeholder="Pin Code"
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-40 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4">Submit</button>
            </form>
        </div>
    );
};

export default PostalAddressForm;
