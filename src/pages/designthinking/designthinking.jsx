import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './designthinking.css'


const Designthinking = () =>{
    return(
        <div className='designthinking'>
            <RegisterPage 
            title="Design Incubation"
            time="10AM onwards"
            date="25th Magh, 2080"
            location="CIT Hall, WRC"
            countdown_time="02/08/2024"
            urll="https://forms.gle/27qRTfuPMw6SWFTL8"
            /> 
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>"Design Incubation" is where designers approach problem-solving in order to come up with fresh concepts, resolve challenging issues, and develop ground-breaking solutions.</p>
            <p>Participants are tasked with using the design thinking method to solve problems in this competition. Understanding the user, recognizing the issue, generating ideas for potential solutions, and prototyping the best solution are all steps in this process. Anyone with an interest in design and innovation is welcome to enter the competition, and the winning team will receive a monetary award. Either an individual or a two-person team may compete.</p>
            <p>Design thinking offers a framework for coming up with original answers to complicated challenges in a world that is changing quickly. It is a procedure that starts with comprehending people's demands and concludes with creating novel solutions to meet those needs.</p>
            <p>The day before the event, industry professionals will conduct a session on designing the application
            </p>
            <h3>More Info:</h3>
            <ul>
            <li>Each participant is given a theme at the start of the program. </li>
            <li>Participants have to design an application on User Interaction.</li>
            <li>Designers have to present their concept based on the theme within 3 hours.</li>
            </ul>
            <h3>Point System</h3>
            <p>The presented concept is given points on the basis of design and problem-solving features.</p>
            <h3>Demo Example</h3>
            <p>If the "Movie ticketing system" theme is given, then you have to design the screens for ticket booking, payment, and confirmation. You have to also take care of the user experience and keep it in mind while you design the screens. A good design should be such that it is self-explanatory and users should be able to figure out what to do without any difficulty.</p>
            <p>The important thing is the creativity and innovation of your design.</p>
            <p>You can use any platform or tool that you want such as Android Studio, Adobe XD, Figma, etc. You can also use hand-drawn wireframes. Once you have completed the design, you have to submit the design to us.</p>
        
        </div>
            <Copyright/>
       
        </div>
    )
}

export default Designthinking;