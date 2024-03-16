import React, { useState } from 'react';

const SignUpPage2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = () => {
        setIsFormValid(!!email && !!password && !!confirmPassword && !!username && password === confirmPassword);
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('Please fill in all fields or make sure passwords match.');
            return;
        }
        console.log(email);
        console.log(password);
        console.log(username);
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="bg-red-100 p-10 rounded-lg w-1/2 mx-auto my-5">
            <h3 className="text-3xl font-bold text-black pb-5">Sign up</h3>
            <div className="space-y-4">
                <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        handleInputChange();
                    }}
                />
                <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    type="text"
                    placeholder="Set Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        handleInputChange();
                    }}
                />
                <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        handleInputChange();
                    }}
                />
                <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        handleInputChange();
                    }}
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <div className="flex justify-end">
                    <button disabled={!isFormValid}
                        className={`bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 ${isFormValid ? "" : "opacity-50 cursor-not-allowed"}`}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage2;
