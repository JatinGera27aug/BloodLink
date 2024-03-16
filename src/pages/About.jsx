import React from 'react';
import TeamMembers from '../components/TeamMembers';
import MissionVision from '../components/MissionVision';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>

            <div className="mb-8">
                <MissionVision />
            </div>

            <div className="mb-8">
                <TeamMembers />
            </div>
        </div>
    );
};

export default About;
