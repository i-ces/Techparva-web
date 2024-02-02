import React from 'react';
import './events.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiCoffeeTogo, BsClipboardData, GiDeadWood, AiFillSecurityScan, GrWorkshop } from 'react-icons/all';

const eventDetails = [
    {
        title: 'Code with Coffee',
        icon: <BiCoffeeTogo className='icon' color='brown' />,
        date: '24 Magh ',
        time: '2:00 PM',
        description: 'Code with Coffee is a competitive coding challenge hosted on Hacker Rank',
        link: 'code-with-coffee'
    },
    {
        title: 'Design Workshop',
        icon: <GrWorkshop className='icon' />,
        date: '24 Magh ',
        time: '7:00 PM',
        description: 'Online session for design incubation workshop.',
        link: 'design-workshop'

    },
    {
        title: 'Design Incubation',
        icon: <GiDeadWood className='icon' color='green' />,
        date: '25 Magh ',
        time: '10:00 AM',
        description: 'Tackle the growing challenges in the real world, with your next app design',
        link: 'design-thinking'
    },
    {
        title: 'Datathon',
        icon: <BsClipboardData className='icon' color='red' />,
        date: '25 Magh ',
        time: '2:00 PM',
        description: 'Learn. Clean given dataset, generate insights, analyze, visualize and win',
        link: 'datathon'
    },
    {
        title: 'Security Session',
        icon: <GrWorkshop className='icon' />,
        date: '25 Magh ',
        time: '10:00 AM',
        description: 'Pre-Event for CTF',
        link: 'security-session'
    },
    {
        title: 'Babypwn: CTF',
        icon: <AiFillSecurityScan className='icon' color='orange' />,
        date: '26 Magh ',
        time: '10:00 AM',
        description: 'Your first baby steps into the world of cybersecurity and ethical hacking',
        link: 'breaking-into-security'
    }

];

const Events = () => {
    return (
        <div className='events' id='events'>
            <div className='blank'></div>
            <div className='title'>
                <p>i-CES</p>
                <h1>Learn and Compete your Interest</h1>
                <h3>
                    i-CES is organizing Tech Parva, a celebration of Technology, Competition, and
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
                        date={`${event.date} ${event.time}`}
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
                                Register Now
                            </button>
                        </div>


                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Events;
