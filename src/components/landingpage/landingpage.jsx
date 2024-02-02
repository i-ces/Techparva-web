import React from 'react';
import Navig from '../navig/navig'
import left from '../../assets/a.png'
import mid from '../../assets/b.png'
import right from '../../assets/c.png'

import './landingpage.css'

import { Typewriter } from 'react-simple-typewriter'


const Landingpage = () => {
    const PARVA = "PARVA"
    return (
        <div className='landingpage'>
            <Navig />
            <div className='landingcontainer'>
                {/* <div className='titles'>
                    <h4>On the occation of 35th Anniversary</h4>
                    <h1>Department of Electronics, Computer and Information Engineering</h1>
                    <h4>presents</h4>
                    <h3>TechParva</h3>
                    <p>In association with Innovative Computer Engineering Students' Society</p>
                    <a href='#events'><button>View Events</button></a>
                </div> */}

                <div className='titles'>
                    <h1>
                        TECH&nbsp;<span>&#123;</span>PARVA<span style={{ marginRight: "5px" }}>&#125; </span>
                        <Typewriter
                            loop={5}
                            words={['2.0']}
                            typeSpeed={70}
                        />
                    </h1>
                </div>
                <div className='subtitles'>
                    <h2>
                        Celebrating&nbsp;&nbsp;
                        <Typewriter
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            words={['Technology', 'Excellence', 'Competition', 'Enthusiasm', 'Tech Festival']}
                        />
                    </h2>
                    {/* <h3>Technology&nbsp;&nbsp;-&nbsp;&nbsp;Excellegence&nbsp;&nbsp;-&nbsp;&nbsp;Competition</h3> */}
                </div>
                {/* <div className='buttons'>
                <a href="#events"><button>About the Event</button></a><a href="#events"><button>Register Now</button></a>

            </div> */}
            </div>
            <div className='images'>
                <div className='img'>
                    <img src={left} />
                </div>
                <div className='img'>
                    <img src={mid} />
                </div>
                <div className='img'>
                    <img src={right} />
                </div>
            </div>
        </div>
    )
}

export default Landingpage;