import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './security.css';

const Security = () => {
    return (
        <div className='security'>
            <RegisterPage
                title="Security Session"
                time="2PM onwards"
                date="25th Magh, 2080"
                location="Electrical Hall, WRC"
                countdown_time="02/08/2024"
                urll="https://forms.gle/rxuaDnZWyRD3LpPx8"
                background="/cover/workshop.png"
            />
            <div className="detailsofevent">
                <h3>About the event</h3>
                <p> 
                Security Session is a pre-event for TechParva BabyPwn: Capture the Flag, where you can get some hint about the main event and do your best.  
               </p>
              
            </div>
            <Copyright />

        </div>
    )
}

export default Security;
