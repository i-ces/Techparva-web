import React from 'react';
import './sponsors.css';

const sponsors = {
    titleSponsor: { name: 'Nipuna', logo: '/iceslogo.png' },
    goldSponsor: { name: 'Jankari Tech', logo: '/iceslogo.png' },
    paymentPartner: { name: 'eSewa', logo: '/iceslogo.png' },
    medicalPartner: [
        { name: 'Kriti Ayurveda', logo: '/iceslogo.png' },
        { name: 'Gorkha Ayurveda', logo: '/iceslogo.png' },
    ],
    giftingPartner: { name: 'Book Mart', logo: '/iceslogo.png' },
    silverSponsor: [
        { name: 'Urja Labs', logo: '/iceslogo.png' },
        { name: 'Margin Top', logo: '/iceslogo.png' },
    ],
};

const sponsorDisplayNames = {
    titleSponsor: 'Diamond Sponsor',
    goldSponsor: 'Gold Sponsor',
    paymentPartner: 'Payment Partner',
    medicalPartner: 'Medical Partner',
    giftingPartner: 'Gifting Partner',
    silverSponsor: 'Silver Sponsor',
};

const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            <div className='powered-by'>
                <h2>Powered by</h2>
                <img src="/iceslogo.png" alt="kangaroo" />
                Kangaroo association
            </div>
            {Object.entries(sponsors).map(([type, data], index) => (
                <div key={index} className='sponsor-category'>
                    <h2>{sponsorDisplayNames[type]}</h2>
                    <div className='sponsors'>
                        {Array.isArray(data) ? (
                            data.map((sponsor, index) => (
                                <div key={index} className='sponsor'>
                                    <img src={sponsor.logo} alt={sponsor.name} height={64} />
                                    <p>{sponsor.name}</p>
                                </div>
                            ))
                        ) : (
                            <div className='sponsor'>
                                <img src={data.logo} alt={data.name} height={64} />
                                <p>{data.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
