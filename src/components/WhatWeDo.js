import React from 'react';

const WhatWeDo = () => {
    const activities = [
        {
            title: 'Shelter and Food',
            description:
                'Gopabandhu Charitable Trust is dedicated to providing shelter and nutritious meals to those experiencing homelessness. We believe that everyone deserves a safe and warm place to call home, coupled with access to wholesome food that nourishes both the body and soul.',
        },
        {
            title: 'Blood Donation Drives',
            description:
                'In our commitment to saving lives, we organize regular blood donation drives. By encouraging voluntary blood donations, we contribute to ensuring a steady and sufficient supply of blood for medical emergencies and treatments.',
        },
        {
            title: 'Educational Support',
            description:
                'We strongly believe in the transformative power of education. The trust is actively involved in supporting students, particularly those facing financial constraints, by providing scholarships, educational resources, and mentorship opportunities.',
        },
        {
            title: 'Care for the Elderly and Disabled',
            description:
                'Our commitment extends to the elderly and disabled members of our community. Through various programs and initiatives, we strive to enhance their quality of life, promote social inclusion, and create a supportive environment that honors their dignity.',
        },
        {
            title: 'Assistance for Accident Victims',
            description:
                'During times of crisis, such as accidents, timely assistance can make a significant difference. Gopabandhu Charitable Trust extends its support to accident victims by providing immediate medical aid, rehabilitation services, and emotional support to both the victims and their families.',
        },
        {
            title: 'How You Can Contribute',
            description:
                'We believe that positive change is a collective effort. Join us in making a difference by volunteering your time, contributing resources, or supporting our fundraising initiatives. Together, we can create a more compassionate and equitable society. Gopabandhu Charitable Trust welcomes individuals, businesses, and organizations to join hands in our mission to uplift lives and create lasting impact.',
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-2 mb-4'>
            {activities.map((activity, index) => (
                <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
                    <h1 className='font-bold text-xl m-2 p-2'>{activity.title}</h1>
                    <p className='font-semibold'>{activity.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WhatWeDo;
