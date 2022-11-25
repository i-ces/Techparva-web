import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './designthinking.css'


const Designthinking = () =>{
    return(
        <div className='designthinking'>
            <RegisterPage 
            title="Design Incubation"
            time="2pm onwards"
            date="16th Mangsir, 2079"
            location="CIT Hall, WRC"
            countdown_time="12/02/2022"
            /> 
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p> “Design Incubation” is the open space where designers approach problem-solving that can be used to generate new ideas, solve complex problems, and create innovative solutions. 
                The Design Thinking competition challenges participants to come up with creative solutions to problems using the design thinking process. This process involves understanding the user, identifying the problem, coming up with potential solutions, and prototyping the best solution. The competition is open to anyone with an interest in design and creativity, and the winning team will receive a cash prize.
                In a rapidly changing world, design thinking provides a framework for finding creative solutions to complex problems. It is a process that begins with understanding the needs of people and ends with developing innovative solutions that address those needs. 
                The event will also feature a workshop by industry experts on designing the perfect application.
            </p>
            <h3>More Info:</h3>
            <ul>
                <li>Each participant is given a theme at the start of the program</li>
                <li>Participants have to design an application on User Interaction</li>
                <li>Designers have to present their concept based on the theme within 3 hours</li>
            </ul>
            <h3>Point System</h3>
            <p>The presented concept is given points on the basis of design and problem-solving features.</p>
        </div>
            <Copyright/>
       
        </div>
    )
}

export default Designthinking;