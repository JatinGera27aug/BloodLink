import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is blood donation?',
            answer: 'Blood donation is the process of voluntarily giving blood, which can then be used for transfusions or other medical purposes.',
        },
        {
            question: 'Who can donate blood?',
            answer: 'Generally, individuals who are in good health, weigh at least 110 pounds, and are at least 17 years old (or 16 with parental consent) may be eligible to donate blood.',
        },
        {
            question: 'Is blood donation safe?',
            answer: 'Yes, blood donation is safe. Donating blood is a simple and relatively quick process, and blood donation centers follow strict protocols to ensure the safety of donors and recipients.',
        },
        {
            question: 'How often can I donate blood?',
            answer: 'The frequency of blood donation depends on various factors, including your health, the type of donation, and local regulations. In general, whole blood donors can donate every 8 weeks, while double red cell donors can donate every 16 weeks.',
        },
    ];

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-300">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                        <button
                            className="flex justify-between items-center w-full py-2 px-4 bg-red-200 font-bold rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-semibold" >{faq.question}</span>
                            <span className='font-bold'>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="mt-2 pl-8 font-semibold">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
