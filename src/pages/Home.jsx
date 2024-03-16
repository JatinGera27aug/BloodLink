import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Leaderboard from '../components/Leaderboard';
import UpcomingCamps from '../components/UpcomingCamps';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl flex flex-wrap justify-center gap-8">
            <div>
                <UpcomingCamps />
            </div>
            <div>
                <Leaderboard />
            </div>
            
            <div>
                <FAQ />
            </div>
        </div>
    );
}
