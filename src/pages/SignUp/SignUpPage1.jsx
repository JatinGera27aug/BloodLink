import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage1 = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [blood, setBlood] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const bloodGroup = [
        { value: 'A+' },
        { value: 'B+' },
        { value: 'O+' },
        { value: 'AB+' },
        { value: 'A-' },
        { value: 'B-' },
        { value: 'O-' },
        { value: 'AB-' },
    ];

    // Update isFormValid whenever any input field changes
    const handleInputChange = () => {
        setIsFormValid(!!name && !!dob && !!aadhar && !!blood);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('Please fill in all fields.');
            return;
        }
        console.log(name);
        console.log(dob);
        console.log(aadhar);
        console.log(blood);
    };

    return (
        <div className="bg-red-100 p-10 rounded-lg w-1/2 mx-auto my-5">
            <h3 className="text-3xl font-bold text-black pb-5">Sign up</h3>
            <div className="space-y-4">
                <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" placeholder="Enter your name" value={name} onChange={(e) => {setName(e.target.value); handleInputChange()}} required/>
                <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="date" placeholder="Enter DOB" value={dob} onChange={(e) => {setDob(e.target.value); handleInputChange()}} required/>
                <select className="border border-gray-300 rounded-md py-2 px-3 w-full" value={blood} onChange={(e) => {setBlood(e.target.value); handleInputChange()}} required>
                    <option value="" disabled>Select your blood group</option>
                    {bloodGroup.map((option) => (
                        <option key={option.value} value={option.value}>{option.value}</option>
                    ))}
                </select>
                <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" placeholder="Enter your Aadhar number" value={aadhar} onChange={(e) => {setAadhar(e.target.value); handleInputChange()}} required/>
                <div className="flex justify-center">
                    <label className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
                        Submit Document for Verification
                        <input type="file" className="hidden" required/>
                    </label>
                </div>
                <div className="flex justify-end">
                    <button disabled={!isFormValid} className={`bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`} onClick={handleSubmit}>
                        <Link to='/sign-up-2'>Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage1;
