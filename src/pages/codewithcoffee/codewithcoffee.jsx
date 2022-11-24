import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';
import './cofewithcoffee.css'

const CodewithCoffee = () =>{
    return(
        <div className='codewithcoffee'>
            <RegisterPage 
            title="Code with Coffee"
            time="2 - 3pm"
            date="3rd May, 2022"
            location="CIT Hall, WRC"
            countdown_time="12/01/2022"
            />
        <div className="detailsofevent">
            <h3>About the event</h3>
            <p> A great way to improve your skills when learning to code is by solving coding challenges. Solving different types of challenges and puzzles can help you become a better problem solver, learn the intricacies of a programming language, learn new algorithms, and more. The event will feature Leet Code style challenges with an interactive playground to code towards the solution.
                So, We have come up with the “Code with Coffee” contest. It is a platform to show your talent to cope with coding problems within a time barrier.</p>
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