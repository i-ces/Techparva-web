import React from 'react';
import './sponsors.css';

const sponsors = {
    platinumSponsor: { name: 'Nipuna', logo: '/sponsors/nipuna-prabidhik-sewa.png', size: 'large' },
    diamondSponsor: { name: 'Kangaroo Education Foundation', logo: '/sponsors/Kangaroo-logo.png', },
    goldSponsor: [{ name: 'Jankari Tech', logo: '/sponsors/jankari-tech.png' }],
    silverSponsor: [
        { name: 'Urja Labs', logo: '/sponsors/urja-tech.jpg' },
        { name: 'Margin Top', logo: '/sponsors/margin-top.png' },
        { name: 'IT Deurali', logo: '/sponsors/it-deurali.png' },
        { name: 'Hamro kosheli Ciura udhyog', logo: '/sponsors/hamro-koseli.jpg' },
        { name: 'Black Tech.', logo: '/sponsors/black-tech.png' }
    ],
    paymentPartner: { name: 'eSewa', logo: '/sponsors/esewa_logo.png' },
    eLearningPartner: { name: 'Programiz', logo: '/sponsors/pc_logo.svg' },
    medicalPartner: [
        { name: 'Kriti Ayurveda', logo: '/sponsors/kriti-ayurveda.png' },
        { name: 'Gorkha Ayurveda', logo: '/sponsors/gorkha-ayurved.png' },
    ],
    giftingPartner: { name: 'Book Mart', logo: '/sponsors/Book_mart.jpg', size: 'large' },
};

const sponsorDisplayNames = {
    platinumSponsor: 'Title Sponsor ✨',
    diamondSponsor: 'Powered By',
    goldSponsor: 'Supported By',
    paymentPartner: 'Payment Partner',
    medicalPartner: 'Medical Partner',
    giftingPartner: 'Gifting Partner',
    silverSponsor: 'Silver Sponsor',
    eLearningPartner: 'E-Learning Partner',
};

const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            <div className='sponsors-bigass-title'>
                Our Sponsors
            </div>
            {Object.entries(sponsors).map(([type, data], index) => (
                <div key={index} className='sponsor-category'>
                    <div
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: sponsorDisplayNames[type] === 'Title Sponsor ✨' ? '500' : '',
                            marginBottom: '1rem',
                        }}
                    >{sponsorDisplayNames[type]}</div>
                    <div className='sponsors'>
                        {Array.isArray(data) ? (
                            data.map((sponsor, index) => (
                                <div key={index} className='sponsor'>
                                    <img src={sponsor.logo} alt={sponsor.name} height={74} />
                                </div>
                            ))
                        ) : (
                            <div className='sponsor'>
                                <img src={data.logo} alt={data.name} height={data.size === 'large' ? 128 : 74} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
