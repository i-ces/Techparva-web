import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './designthinking.css'


const Designworkshop = () => {
    return (
        <div className='designthinking'>
            <RegisterPage
                title="Design Workshop"
                time="7pm onwards"
                date="24th Magh, 2080"
                location="Online"
                countdown_time="02/07/2024"
                urll="https://forms.gle/kXdJ4UsXrir87FfNA"
                background='/cover/workshop.png'
            />
            <div className="detailsofevent">
                <h3>About the event</h3>
                <p>
                    Design Workshop is a pre-event for TechParva Design Incubation, where you can get some hint about the main event and do your best.
                </p>

            </div>
            <Copyright />

        </div>
    )
}

export default Designworkshop;