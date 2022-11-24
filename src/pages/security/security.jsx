import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './security.css';

const Security = () =>{
    return(
        <div className='security'>
            <RegisterPage 
            title="BabyPwn"
            time="2 - 3pm"
            date="3rd May, 2022"
            location="CIT Hall, WRC"
            countdown_time="12/01/2022"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>Cybersecurity is one of the most desired professions in today's job market. There is a high demand for professionals who can secure today's modern infrastructure. But getting into security is a chore in itself. With BabyPwn, our desire is to help people interested in security begin their journey. The event will have a talk session with industry insiders detailing their experience in the security, followed by a beginner level Capture the Flag tournament.</p>
            <h3>More Info:</h3>
            <ul>
                <li>Talk session with industry insiders on how to get started in security</li>
                <li>A beginner level Capture the Flag Tournament</li>
                <li>Networking with Security Insiders</li>
            </ul>
            <h3>Point System</h3>
            <p>To be Announced</p>
        </div>
            <Copyright/>

        </div>
    )
}

export default Security;