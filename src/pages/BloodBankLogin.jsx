import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BloodBankLogin = () => {
    const [bloodBankId, setBloodBankId] = useState('');
    const [password, setPassword] = useState('');

    const handleBloodBankIdChange = (event) => {
        setBloodBankId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 my-4 bg-white border border-gray-300 shadow-md rounded-md">
            <h2 className="text-3xl font-bold text-center mb-6">Blood Bank Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bloodBankId" className="block text-sm font-medium text-gray-700 mb-1 text-left">Blood Bank ID</label>
                    <input
                        type="text"
                        id="bloodBankId"
                        value={bloodBankId}
                        onChange={handleBloodBankIdChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500">Register a Blood Bank</Link></p>
        </div>
    );
};

export default BloodBankLogin;
