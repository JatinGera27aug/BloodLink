import React from 'react'
import PreviousAppointment from '../components/PreviousAppointment';
import CampRegister from '../components/CampRegister';

const Donate = () => {
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
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Blood Donation Portal</h1>
      <p className="mb-4">Thank you for considering donating blood. Your donation can save lives!</p>
      <div className="overflow-x-auto w-3/4 mx-auto grid gap-4">
      <CampRegister />
      <PreviousAppointment />
    </div>
    </div>
  )
}

export default Donate
