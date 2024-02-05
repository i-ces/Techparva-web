import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './datathon.css'


const Datathon = () => {
    return (
        <div className='datathon'>
            <RegisterPage
                title="Datathon"
                time="2PM onwards"
                date="24th Magh, 2080"
                location="CIT Hall, WRC"
                countdown_time="02/07/2024"
                urll="https://forms.gle/YvjouVmgnNHDnvCC9"
                background="/cover/datathon.png"
            />
            <div className="detailsofevent">
                <h3>About the event</h3>
                <p>Datathon; data analysis competition where teams of students are deemed to use their skills to identify insights and solutions that may be used in the real world.</p>
                <p>The day before the event, there will be a workshop where attendees can pick up the fundamentals of data cleaning and visualization.</p>
                <h3>More Info:</h3>
                <ul>
                    <li>The probmelm statement for the datathon will be revealed after fininshing workshop of datathon i.e. at 2PM of Magh 24</li>
                    <li>The time limit of 24 hr</li>
                    <li>After the end of 24 hours i.e @ 2 P.M of Magh 25, participants are required to be ready with their presentation at CIT Multimedia Hall, WRC. </li>
                    <li>Teams are given access to a large data set to process.</li>
                    <li>The team that is able to come up with the most innovative and practical solution to the issue usually ends up winning.</li>
                </ul>
                <u>More info at:: </u> <a href = "https://docs.google.com/document/d/1fLkqAquyMinTiSMv8iQGgqG3-RDCToaR37rp33Btk3c/edit">here</a>
                <h3>Point System</h3>
                <p>Judges will evaluate based on creativity, information, visualization and model.</p>
            </div>
            <Copyright />

        </div>
    )
}

export default Datathon;
