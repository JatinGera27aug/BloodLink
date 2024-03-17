import React, { useState } from 'react';
import BloodBankAddressForm from '../components/BloodBankAddressForm';
import BloodBankDetailsForm from '../components/BloodBankDetailsForm';
import PostalAddressForm from '../components/PostalAddressForm';

const BloodBankRegister = () => {
    const handleAddressSubmit = (data) => {
        // Logic for handling Blood Bank Address form submission
    };

    const handleDetailsSubmit = (data) => {
        // Logic for handling Blood Bank Details form submission
    };

    const handlePostalAddressSubmit = (data) => {
        // Logic for handling Postal Address form submission
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">Blood Bank Registration</h2>

            {/* Blood Bank Address Form */}
            <div className="w-full max-w-7xl mb-8">
                <BloodBankAddressForm onSubmit={handleAddressSubmit} />
            </div>

            {/* Blood Bank Details Form */}
            <div className="w-full max-w-7xl mb-8">
                <BloodBankDetailsForm onSubmit={handleDetailsSubmit} />
            </div>

            {/* Postal Address Form */}
            <div className="w-full max-w-7xl mb-8">
                <PostalAddressForm onSubmit={handlePostalAddressSubmit} />
            </div>
        </div>
    );
};

export default BloodBankRegister;
