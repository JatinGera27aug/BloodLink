import React from 'react';

const BloodDonationLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-24 h-48">
                {/* Blood bag */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-16 h-32 rounded-full"></div>
                {/* Tube */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-4 h-24"></div>
            </div>
            <div className="w-12 h-24 ml-4">
                {/* Head */}
                <div className="bg-red-500 w-8 h-8 rounded-full mb-2"></div>
                {/* Body */}
                <div className="bg-red-500 w-12 h-16"></div>
            </div>
            <div className="w-2 h-12 ml-2">
                {/* Left Arm */}
                <div className="bg-red-500 w-2 h-12 rounded-lg"></div>
            </div>
            <div className="w-2 h-12 ml-2">
                {/* Right Arm */}
                <div className="bg-red-500 w-2 h-12 rounded-lg"></div>
            </div>
            <div className="w-2 h-12 ml-2">
                {/* Left Leg */}
                <div className="bg-red-500 w-2 h-12 rounded-lg"></div>
            </div>
            <div className="w-2 h-12 ml-2">
                {/* Right Leg */}
                <div className="bg-red-500 w-2 h-12 rounded-lg"></div>
            </div>
        </div>
    );
};

export default BloodDonationLoader;
