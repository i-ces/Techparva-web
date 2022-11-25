import React from 'react';
import './events.css'
import {Link} from'react-router-dom'
import {BiCoffeeTogo} from 'react-icons/bi'
import {BsClipboardData} from 'react-icons/bs'
import {GiDeadWood} from 'react-icons/gi'
import {AiFillSecurityScan} from 'react-icons/ai'









const Events = () =>{
    return(
        <div className='events'>
            <div className='blank'></div>
            <div className='title'>
                <p>i-CES</p>
                <h1>Learn and Compete your Interest</h1>
                <h3>In celebration of the 35th anniversary of Paschimanchal Campus, Department of Electronics and Computer Engineering in association with i-CES is organizing Tech Parva, a celebration of Technology, Competition and Excellence.</h3>
            </div>
            <div className='content' id="events">
                <a href="/codewithcoffee">
                    <div className='scard'>
                        <div className='image'>
                            <BiCoffeeTogo className='icon'/>
                        </div>
                        <h3>Code with Coffee</h3>
                        <div className='line'></div>
                        <p>Code with Coffee is a competitive coding challenge hosted on Hacker Rank</p>
                    </div>
                </a>
                <a href="/datathon">
                    <div className='scard'>
                        <div className='image'>
                            <BsClipboardData className='icon'/>
                        </div>
                        <h3>Datathon</h3>
                        <div className='line'></div>
                        <p>Learn. Clean given dataset, generate insights, analyze, visualize and win</p>
                    </div>
                </a>
                <a href="/designthinking">
                    <div className='scard'>
                        <div className='image'>
                            <GiDeadWood className='icon'/>
                        </div>
                        <h3>Design Incubation </h3>
                        <div className='line'></div>
                        <p>Tackle the growing challenges in real world, with your next app design</p>
                    </div>
                </a>
                <a href="/breakingintosecurity">
                <div className='scard'>
                    <div className='image'>
                        <AiFillSecurityScan className='icon'/>
                    </div>
                    <h3>Babypwn </h3>
                    <div className='line'></div>
                    <p>Your first baby steps into the world of cybersecurity and ethical hacking</p>
                </div>
                </a>
            </div>
        </div>
    )
}


export default Events;



