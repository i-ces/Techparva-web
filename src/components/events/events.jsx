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
    },
    {
        title: 'Datathon',
        icon: <BsClipboardData className='icon' />,
        date: 'March 2023',
        description: 'Learn. Clean given dataset, generate insights, analyze, visualize and win',
    },
    {
        title: 'Design Incubation',
        icon: <GiDeadWood className='icon' />,
        date: 'April 2023',
        description: 'Tackle the growing challenges in the real world, with your next app design',
    },
    {
        title: 'Babypwn: CTF',
        icon: <AiFillSecurityScan className='icon' />,
        date: 'May 2023',
        description: 'Your first baby steps into the world of cybersecurity and ethical hacking',
    },
];

const Events = () => {
    return (
        <div className='events'>
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
            <VerticalTimeline >
                {eventDetails.map((event, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        date={event.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={event.icon}
                    >
                        <a href={event.link} key={index}>
                            <div className='scard'>
                                <div className='image'>{event.icon}</div>
                                <h3>{event.title}</h3>
                                <div className='line'></div>
                                <p>{event.description}</p>
                            </div>
                        </a>

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Events;
