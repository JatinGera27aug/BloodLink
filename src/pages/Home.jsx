import React, { useContext } from 'react';
import FAQ from '../components/FAQ';
import Leaderboard from '../components/Leaderboard';
import UpcomingCamps from '../components/UpcomingCamps';
import Info from '../components/Info';
import Slider from '../components/Slider';
import SearchComponent from '../components/Search';
import UserContext from '../context/UserContext';
import BloodDonationTable from '../components/BloodDonationTable';
import BloodImage from '../assets/bloodImage.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Implement your search logic here
    };
    const { user } = useContext(UserContext);

    return (
        <div className="mx-auto w-full max-w-7xl flex flex-wrap justify-center gap-8 my-4">
            <div className="w-full flex justify-end">
                <SearchComponent onSearch={handleSearch} />
            </div>
            <div className='w-full'>
                <Slider />
            </div>
            {!user && <div className='w-full flex justify-end'>
                <Link
                    to="/donate"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-4 mr-2 focus:outline-none"
                >
                    Donate Blood Now
                </Link>
                <Link
                    to="/recieve"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-4 mr-2 focus:outline-none"
                >
                    Looking for blood?
                </Link>
            </div>}
            <div className="w-full sm:w-auto">
                <Info />
            </div>
            <div className="w-full sm:w-auto">
                <UpcomingCamps />
            </div>
            <div className="w-full sm:w-auto">
                <Leaderboard />
            </div>
            <div className="w-full sm:w-auto flex">
                <div className="w-auto h-auto mr-10 my-auto">
                    <img src={BloodImage} alt="blood" className="w-full h-full object-cover" />
                </div>
                <div className="w-6/12">
                    <BloodDonationTable />
                </div>
            </div>

            <div className="w-full sm:w-auto">
                <FAQ />
            </div>
        </div>
    );
}
