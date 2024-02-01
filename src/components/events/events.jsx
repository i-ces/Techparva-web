import React from 'react';
import './events.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiCoffeeTogo, BsClipboardData, GiDeadWood, AiFillSecurityScan } from 'react-icons/all';

const eventDetails = [
    {
        title: 'Code with Coffee',
        icon: <BiCoffeeTogo className='icon' />,
        date: 'February 2023', // Set your specific dates
        description: 'Code with Coffee is a competitive coding challenge hosted on Hacker Rank',
        link: 'codewithcoffee'
    },
    {
        title: 'Datathon',
        icon: <BsClipboardData className='icon' />,
        date: 'March 2023',
        description: 'Learn. Clean given dataset, generate insights, analyze, visualize and win',
        link: 'datathon'
    },
    {
        title: 'Design Incubation',
        icon: <GiDeadWood className='icon' />,
        date: 'April 2023',
        description: 'Tackle the growing challenges in the real world, with your next app design',
        link: 'designthinking'
    },
    {
        title: 'Babypwn: CTF',
        icon: <AiFillSecurityScan className='icon' />,
        date: 'May 2023',
        description: 'Your first baby steps into the world of cybersecurity and ethical hacking',
        link: 'breakingintosecurity'
    },
];

const Events = () => {
    return (
        <div className='events' id='events'>
            <div className='blank'></div>
            <div className='title'>
                <p>i-CES</p>
                <h1>Learn and Compete your Interest</h1>
                <h3>
                    In celebration of the 35th anniversary of Paschimanchal Campus, Department of Electronics and Computer
                    Engineering in association with i-CES is organizing Tech Parva, a celebration of Technology, Competition, and
                    Excellence.
                </h3>
            </div>
            <VerticalTimeline
                animate={true}
                lineColor='#ddd'

            >
                {eventDetails.map((event, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        date={event.date}
                        icon={event.icon}
                        iconStyle={{ background: '#fff', color: '#000' }}
                    >
                        <div>
                            <div className='scard'>
                                <div className='image'>{event.icon}</div>
                                <h3>{event.title}</h3>
                                <div className='line'></div>
                                <p>{event.description}</p>
                            </div>
                            <button className='booknow--button'
                                onClick={() => {
                                    window.location.href = event.link;
                                }}
                            >
                                Book now
                            </button>
                        </div>


                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Events;
