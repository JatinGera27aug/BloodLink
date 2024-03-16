import React, { useState } from 'react';

const RecieverForm = ({setShowBloodBanks}) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [hospital, setHospital] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // Blood groups and types
    const bloodGroups = [
        { value: 'A+', label: 'A+' },
        { value: 'B+', label: 'B+' },
        { value: 'O+', label: 'O+' },
        { value: 'AB+', label: 'AB+' },
        { value: 'A-', label: 'A-' },
        { value: 'B-', label: 'B-' },
        { value: 'O-', label: 'O-' },
        { value: 'AB-', label: 'AB-' },
    ];

    const bloodTypes = [
        { value: 'Whole Blood', label: 'Whole Blood' },
        { value: 'Single Donor Platelet', label: 'Single Donor Platelet' },
        { value: 'Packed Red Cells', label: 'Packed Red Cells' },
    ];

    // Update isFormValid whenever any input field changes
    const handleInputChange = () => {
        setIsFormValid(!!name && !!dateOfBirth && !!city && !!district && !!hospital && !!bloodGroup && !!bloodType);
    };

    // Calculate age based on date of birth
    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleDateChange = (e) => {
        setDateOfBirth(e.target.value);
        setAge(calculateAge(e.target.value));
        handleInputChange();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('Please fill in all fields.');
            return;
        }
        console.log(name);
        console.log(dateOfBirth);
        console.log(age);
        console.log(city);
        console.log(district);
        console.log(hospital);
        console.log(bloodGroup);
        console.log(bloodType);
        setShowBloodBanks(true); // Show blood banks table after form submission
    };

    return (
        <div className="bg-red-100 p-10 rounded-lg w-1/2 mx-auto my-5">
            <h3 className="text-3xl font-bold text-black pb-5">Look for Blood</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium text-left pb-2 text-gray-700">Receiver's Name</label>
                    <input id="name" className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" placeholder="Enter receiver's name" value={name} onChange={(e) => { setName(e.target.value); handleInputChange() }} required />
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="block font-medium text-left pb-2 text-gray-700">Date of Birth</label>
                    <input id="dateOfBirth" className="border border-gray-300 rounded-md py-2 px-3 w-full" type="date" value={dateOfBirth} onChange={handleDateChange} required />
                </div>
                <div>
                    <label htmlFor="age" className="block font-medium text-left pb-2 text-gray-700">Age</label>
                    <input id="age" className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" value={age} readOnly />
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label htmlFor="city" className="block font-medium text-left pb-2 text-gray-700">City</label>
                        <select id="city" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={city} onChange={(e) => { setCity(e.target.value); handleInputChange() }} required>
                            <option value="" disabled>Select City</option>
                            <option value="City A">City A</option>
                            <option value="City B">City B</option>
                            <option value="City C">City C</option>
                            {/* Add more cities as needed */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="district" className="block font-medium text-left pb-2 text-gray-700">District</label>
                        <select id="district" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={district} onChange={(e) => { setDistrict(e.target.value); handleInputChange() }} required>
                            <option value="" disabled>Select District</option>
                            <option value="District A">District A</option>
                            <option value="District B">District B</option>
                            <option value="District C">District C</option>
                            {/* Add more districts as needed */}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="hospital" className="block font-medium text-left pb-2 text-gray-700">Hospital</label>
                    <select id="hospital" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={hospital} onChange={(e) => { setHospital(e.target.value); handleInputChange() }} required>
                        <option value="" disabled>Select Hospital</option>
                        <option value="Hospital A">Hospital A</option>
                        <option value="Hospital B">Hospital B</option>
                        <option value="Hospital C">Hospital C</option>
                        {/* Add more hospitals as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="bloodGroup" className="block font-medium text-left pb-2 text-gray-700">Required Blood Group</label>
                    <select id="bloodGroup" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={bloodGroup} onChange={(e) => { setBloodGroup(e.target.value); handleInputChange() }} required>
                        <option value="" disabled>Select Blood Group</option>
                        {bloodGroups.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="bloodType" className="block font-medium text-left pb-2 text-gray-700">Required Blood Type</label>
                    <select id="bloodType" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={bloodType} onChange={(e) => { setBloodType(e.target.value); handleInputChange() }} required>
                        <option value="" disabled>Select Blood Type</option>
                        {bloodTypes.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>

                        ))}
                    </select>
                </div>
                <div className="flex justify-end">
                <button disabled={!isFormValid} type="submit" className={`bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`} onClick={handleSubmit}>
                        Next
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default RecieverForm;