import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './cofewithcoffee.css'

const CodewithCoffee = () =>{
    return(
        <div className='codewithcoffee'>
            <RegisterPage 
            title="Code with Coffee"
            time="2pm onwards"
            date="14th Mangsir, 2079"
            location="CIT Hall, WRC"
            countdown_time="11/30/2022"
            urll="#"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p>Solving coding challenges is an excellent method to advance your coding abilities. You can  study the complexities of a programming language, discover new algorithms, and more by tackling various challenges and puzzles. The event will include challenges in the LeetCode style with an interactive coding playground.</p>
            <p>We aim to split this competition into two categories— one for 1st and 2nd years of undergrads and another for tested veterans.</p>
            <p>Therefore, we are here with a "Code with Coffee" competition. It serves as a forum for showcasing your aptitude for solving code issues quickly.</p>
            <h3>More Info:</h3>
            <ul>
                <li>Beginner to advanced level coding challenges.</li>
                <li>Sample input and output of a problem are given.</li>
                <li>The event will be hosted on Hackerrank.</li>
                <li>Language independent, pick your language of choice.</li>
                <li>Individual task.</li>
                <li>Scoring based on number of test cases passed and difficulty.</li>
            </ul>
            <h3>Point System</h3>
            <p>The submitted solution is given points on the basis of the highest number of accepted solutions and execution time for a particular problem. </p>
        </div>

        
        <Copyright/>
        </div>
    )
}

export default CodewithCoffee