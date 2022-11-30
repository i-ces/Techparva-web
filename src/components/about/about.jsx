import React from 'react';
import './about.css'
import mid from '../../assets/b.jpg'

const About = () =>{
    return(
        <div className='about'>
            <div className='aboutcontainer'>
                <div className='aboutleft'>
                    <div className='leftcontent'>
                        <h1>TechParva</h1>
                        <p>Nn this eve of 35th annual anniversarry of Paschimanchal Campus, Department of Electronics and Computer Engineering along with i-CES is devising to organize “Tech Parva”. An event to rate their everyday learning and explore more as technology is multifaceted.</p>
                        <p> This program intends to cater tech enthusiasts a platform to learn and prove their skills as well.</p>
                        <a href="#"><button>Register</button></a>
                    </div>
                </div>
                <div className='aboutright'>
                    <img src={mid}/>
                </div>
            </div>

        </div>
    )
}


export default About