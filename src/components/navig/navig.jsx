import React from 'react';
import { Link } from 'react-router-dom';
import './navig.css'
import logo from '../../assets/Asset_1.png'


function Navig() {
    return (
        <>
            <nav className='navigation'>
                <div className='left'>
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className='right'>
                    <a href="/#events">Events</a>
                </div>
            </nav>
        </>
    )
}

export default Navig;










