import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './security.css';

const Security = () =>{
    return(
        <div className='security'>
            <RegisterPage 
            title="BabyPwn: Capture the Flag"
            time="10am onwards"
            date="26th Magh, 2080"
            location="CIT Hall, WRC"
            countdown_time="02/09/2024"
            urll = "https://forms.gle/jWgSWp719UYM18f97"
            background = "/cover/ctf.jpeg"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>Cybersecurity is one of the most sought-after professions. Professionals that can secure contemporary infrastructure are in high demand. But going through security is a hassle in and of itself. </p>
            <p>Our goal with BabyPwn is to assist those who are interested in security in starting their adventure. A discussion session with experts in the field discussing their experiences in security will precede a beginner-level Capture the Flag competition.</p>
            <p>Finding concealed data, obtaining encryption keys, and getting around security measures are frequent problems. Teams of players often attack and defend computer systems during competitions, though the format might vary. Players may occasionally be given particular goals, like locating a lost password, or they may be left free to explore the system and locate anything they can. CTF competitions can be an entertaining and instructive approach to discover computer security and explore more.</p>
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