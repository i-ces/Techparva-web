import React from 'react';
import Navig from '../navig/navig'
import photo from '../../assets/img.jpeg'
import './landingpage.css'
import {Link} from 'react-router-dom'


const Landingpage = () =>{
    const PARVA = "PARVA"
    return(
        <div className='landingpage'>
            <Navig/>
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
                <h1>TECH&nbsp;<span>&#123;</span>PARVA<span>&#125; </span></h1><div className='vertical'><p>15</p><p>16</p></div>
            </div>
            <div className='subtitles'>
                <h2>Celebrating Technology, 35th Annual Anniversary</h2>
                <h2>Paschimanchal Campus</h2>
                {/* <h3>Technology&nbsp;&nbsp;-&nbsp;&nbsp;Excellegence&nbsp;&nbsp;-&nbsp;&nbsp;Competition</h3> */}
            </div>
            <div className='buttons'>
                <a href="#events"><button>About the Event</button></a><a href="#events"><button>Register Now</button></a>

            </div>
            </div>
            <div className='images'>
                <div className='img'>
                    <img src={photo}/>
                </div>
                <div className='img'>
                    <img src={photo}/>
                </div>
                <div className='img'>
                    <img src={photo}/>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;