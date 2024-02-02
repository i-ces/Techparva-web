import React from 'react';
import './sponsors.css';

const sponsors = {
    titleSponsor: { name: 'Nipuna', logo: '/sponsors/nipuna-prabidhik-sewa.png' },
    goldSponsor: [{ name: 'Jankari Tech', logo: '/iceslogo.png' }],
    silverSponsor: [
        { name: 'Urja Labs', logo: '/sponsors/urja-tech.jpg' },
        { name: 'Margin Top', logo: '/iceslogo.png' },
        { name: 'IT Deurali', logo: '/iceslogo.png' },
    ],
    paymentPartner: { name: 'eSewa', logo: '/iceslogo.png' },
    eLearningPartner: { name: 'Programiz', logo: '/iceslogo.png' },
    medicalPartner: [
        { name: 'Kriti Ayurveda', logo: '/iceslogo.png' },
        { name: 'Gorkha Ayurveda', logo: '/iceslogo.png' },
    ],
    giftingPartner: { name: 'Book Mart', logo: '/sponsors/Book_mart.jpg' },
};

const sponsorDisplayNames = {
    titleSponsor: 'Title Sponsor',
    diamondSponsor: 'Diamond Sponsor',
    goldSponsor: 'Gold Sponsor',
    paymentPartner: 'Payment Partner',
    medicalPartner: 'Medical Partner',
    giftingPartner: 'Gifting Partner',
    silverSponsor: 'Silver Sponsor',
    eLearningPartner: 'E-Learning Partner',
};

const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            <div className='powered-by'>
                <div
                    style={
                        {
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }
                    }
                >Powered by</div>
                <div className="sponsor">
                    <img src="/sponsors/Kangaroo-logo.png" alt="kangaroo" height={74} />
                </div>
            </div>
            {Object.entries(sponsors).map(([type, data], index) => (
                <div key={index} className='sponsor-category'>
                    <div
                        style={{
                            fontSize: '2rem',
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
                                <img src={data.logo} alt={data.name} height={74} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
