import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import '../designthinking/designthinking.css'


const Designworkshop = () => {
    return (
        <div className='designthinking'>
            <RegisterPage
                title="Dataform Workshop"
                time="10am onwards"
                date="24th Magh, 2080"
                location="Wrc Cit Hall"
                countdown_time="02/07/2024"
                urll="https://forms.gle/DyFQ8Vs7dMdR2G5b9"
                background='/cover/workshop.png'
            />
            <div className="detailsofevent">
                <h3>About the event</h3>
                <p>
                    A data analysis competition where teams of students are deemed to use their skills to identify insights and solutions that may be used in the real world.
There will be a workshop on Magh 24,  and the Dataset for the competition will be published  after the workshop.
                </p>

            </div>
            <Copyright />

        </div>
    )
}

export default Designworkshop;
