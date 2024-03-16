import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingCamps = () => {
    // Sample data for upcoming blood donation camps (replace with actual data)
    const upcomingCamps = [
        { date: 'March 25, 2024', location: 'ABC Hospital, XYZ City' },
        { date: 'April 10, 2024', location: 'DEF Community Center, LMN Town' },
        { date: 'April 20, 2024', location: 'GHI School, PQR Village' },
    ];

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Upcoming Blood Donation Camps</h2>
            <ul className="space-y-4">
                {upcomingCamps.map((camp, index) => (
                    <li key={index} className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Link to={`/camp/${index}`} className="block">
                            <h3 className="text-lg font-semibold">{camp.date}</h3>
                            <p className="text-gray-600">{camp.location}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingCamps;
