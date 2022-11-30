import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './datathon.css'


const Datathon = () =>{
    return(
        <div className='datathon'>
            <RegisterPage 
            title="Datathon"
            time="10am onwards"
            date="15th Mangsir, 2079"
            location="CIT Hall, WRC"
            countdown_time="12/01/2022"
            urll="#"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>Datathon; data analysis competition where teams of students are deemed to use their skills to identify insights and solutions that may be used in the real world.</p>
            <p>The day before the event, there will be a workshop where attendees can pick up the fundamentals of data cleaning and visualization.</p>
            <h3>More Info:</h3>
            <ul>
                <li>The time limit of 3 hr</li>
                <li>Teams are given access to a large data set to process.</li>
                <li>The team that is able to come up with the most innovative and practical solution to the issue usually ends up winning.</li>
            </ul>
            <h3>Point System</h3>
            <p>Judges will evaluate based on creativity, information, and visualization.</p>
        </div>
            <Copyright/>

            </div>
    )
}

export default Datathon;