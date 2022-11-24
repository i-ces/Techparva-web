import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './datathon.css'


const Datathon = () =>{
    return(
        <div className='datathon'>
            <RegisterPage 
            title="Datathon"
            time="2 - 3pm"
            date="15th Mangsir, 2079"
            location="CIT Hall, WRC"
            countdown_time="12/01/2022"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>Datathon is an initiative for data science enthusiasts to compete and hone their data science skills. The competition is based on a real-world data set, and the teams have to use their skills to find insights and solutions that can be applied in the real world. Datathons are a great way for data enthusiasts to showcase their skills and creativity, and they are also a lot of fun! The event will also feature a workshop a day before the event where participants can learn the basics of data clean and visualization.</p>
            <h3>More Info:</h3>
            <ul>
                <li>The time limit of 3 hr</li>
                <li>Teams are given access to a large data set that they must analyze and used to solve the problem</li>
                <li>The winning team is typically the one that is able to find the most creative and effective solution to the problem</li>
            </ul>
            <h3>Point System</h3>
            <p>To be Announced </p>
        </div>
            <Copyright/>

            </div>
    )
}

export default Datathon;