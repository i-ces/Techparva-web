import React, { useState, useEffect } from 'react';
import './team.css';
const Team = () => {
    const teamMembersData = {
        developer: ['seamoonpandey', 'RakshaRaut'],
        // host: ['jayanti', 'RakshaRaut'],
        // coordinators: ['anisha'],
        socialmedia: ['seamoonpandey'],
    };

    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('developer');

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const handles = teamMembersData[selectedOption];
                const promises = handles.map(async (handle) => {
                    const response = await fetch(`https://api.github.com/users/${handle}`);
                    return response.json();
                });

                const data = await Promise.all(promises);
                setTeamMembers(data);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGitHubData();
    }, [selectedOption, teamMembersData]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const renderContent = () => {
        return (


            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                    alignItems: 'center',
                }}
            >
                {teamMembers.map((member) => (
                    <div key={member.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem',
                        borderRadius: '8px',
                    }}>
                        <a href={member.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={member.avatar_url} alt={member.login} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        </a>
                        <p>{member.login}</p>
                    </div>
                ))}
            </div>

        );
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginBottom: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                    }}
                >
                    Our Team
                </div>
                <div className='teams'>
                    {Object.keys(teamMembersData).map((option) => (
                        <div key={option}>
                            <button
                                onClick={() => handleOptionChange(option)}
                                style={{
                                    borderBottom: '2px solid ' + (selectedOption === option ? '#007bff' : 'transparent'),
                                    color: selectedOption === option ? '#007bff' : '#000',
                                    padding: '8px 16px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                {option.toUpperCase()}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {renderContent()}
        </div>
    );
};

export default Team;
