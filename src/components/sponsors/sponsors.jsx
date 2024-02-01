import React from 'react';
import './sponsors.css';

const sponsors = {
    titleSponsor: { name: 'Nipuna', logo: 'path/to/nipuna-logo.png' },
    goldSponsor: { name: 'Jankari Tech', logo: 'path/to/jankari-tech-logo.png' },
    paymentPartner: { name: 'eSewa', logo: 'path/to/esewa-logo.png' },
    medicalPartner: [
        { name: 'Kriti Ayurveda', logo: 'path/to/kriti-ayurveda-logo.png' },
        { name: 'Gorkha Ayurveda', logo: 'path/to/gorkha-ayurveda-logo.png' },
    ],
    giftingPartner: { name: 'Book Mart', logo: 'path/to/book-mart-logo.png' },
    silverSponsor: [
        { name: 'Urja Labs', logo: '/urja-labs-logo.png' },
        { name: 'Margin Top', logo: '/margin-top-logo.png' },
    ],
};

const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            {Object.entries(sponsors).map(([type, data], index) => (
                <div key={index} className='sponsor-category'>
                    <h2>{type}</h2>
                    {Array.isArray(data) ? (
                        // For arrays (e.g., medicalPartner, silverSponsor)
                        data.map((sponsor, index) => (
                            <div key={index} className='sponsor'>
                                <p>{sponsor.name}</p>
                                <img src={sponsor.logo} alt={sponsor.name} height={64} />
                            </div>
                        ))
                    ) : (
                        // For single objects (e.g., titleSponsor, goldSponsor, paymentPartner, giftingPartner)
                        <div className='sponsor'>
                            <p>{data.name}</p>
                            <img src={data.logo} alt={data.name} height={64} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
