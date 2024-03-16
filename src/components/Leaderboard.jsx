import React, { useState } from 'react';

const Leaderboard = () => {
    // Sample leaderboard data (replace with actual data)
    const [leaderboardData] = useState([
        { rank: 1, name: 'John Doe', score: 1000 },
        { rank: 2, name: 'Jane Smith', score: 950 },
        { rank: 3, name: 'Alice Johnson', score: 900 },
        { rank: 4, name: 'Bob Brown', score: 850 },
        { rank: 5, name: 'Emily Davis', score: 800 },
    ]);

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4 ">Leaderboard</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-6 py-3 text-left text-sm font-bold uppercase">Rank</th>
                        <th className="border border-gray-300 px-6 py-3 text-left text-sm font-bold uppercase">Player</th>
                        <th className="border border-gray-300 px-6 py-3 text-left text-sm font-bold uppercase">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((player, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-red-50  ' : 'bg-red-100'}>
                            <td className="border border-gray-300 px-6 py-4">{player.rank}</td>
                            <td className="border border-gray-300 px-6 py-4">{player.name}</td>
                            <td className="border border-gray-300 px-6 py-4">{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
