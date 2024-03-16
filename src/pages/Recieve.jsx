import React, {useState} from 'react';
import RecieverForm from '../components/RecieverForm';
import BloodBankTable from './BloodBankTable';
const Receive = () => {
    const [showBloodBanks, setShowBloodBanks] = useState(false);
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-900">Receive Blood</h1>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <div className="bg-white shadow-lg rounded-lg p-6 m-4 h-full">
                <h2 className="text-2xl font-bold mb-4 text-red-900">Eligibility for Receiving Blood</h2>
                <ol className="list-decimal ml-6 m-4 text-start">
                  <li className="text-lg text-gray-800">Having a medical condition that requires a blood transfusion.</li>
                  <li className="text-lg text-gray-800">Being in a critical medical situation where blood loss is significant.</li>
                  <li className="text-lg text-gray-800">Being assessed by a healthcare professional to determine the need for a blood transfusion.</li>
                </ol>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="bg-white shadow-lg rounded-lg p-6 m-4 h-full">
                <h2 className="text-2xl font-bold mb-4 text-red-900">Steps to Receive Blood</h2>
                <ol className="list-decimal ml-6 mb-4 text-start">
                  <li className="text-lg text-gray-800">Contact your healthcare provider or go to the nearest medical facility if you require a blood transfusion.</li>
                  <li className="text-lg text-gray-800">Undergo medical evaluation to determine the need for a blood transfusion and assess compatibility.</li>
                  <li className="text-lg text-gray-800">If deemed necessary, a blood transfusion will be administered by trained medical professionals.</li>
                  <li className="text-lg text-gray-800">Follow post-transfusion care instructions provided by healthcare providers.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 m-8">
            <p className="text-lg mb-4 text-gray-800">
              It's essential to understand the risks and benefits associated with blood transfusions and to discuss any concerns with healthcare providers.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              If you have questions or need further information about receiving blood, please consult with your healthcare provider or local blood donation center.
            </p>
          </div>
          <RecieverForm setShowBloodBanks={setShowBloodBanks}  />
          <BloodBankTable showBloodBanks={showBloodBanks} />
        </div>
      );
    };

export default Receive;
