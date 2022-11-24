import React from 'react';
import photo from '../../assets/capture.png'
import './events.css'
import {Link} from'react-router-dom'
import {BiCoffeeTogo} from 'react-icons/bi'
import {BsClipboardData} from 'react-icons/bs'
import {GiDeadWood} from 'react-icons/gi'
import {AiFillSecurityScan} from 'react-icons/ai'









const Events = () =>{
    return(
        <div className='events'>
            <div className='blank'></div>
            <div className='title'>
                <p>i-CES</p>
                <h1>Learn and Compete your Interest</h1>
                <h3>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</h3>
            </div>
            <div className='content' id="events">
                <a href="/codewithcoffee">
                    <div className='scard'>
                        <div className='image'>
                            <BiCoffeeTogo className='icon'/>
                        </div>
                        <h3>Code with Coffee</h3>
                        <div className='line'></div>
                        <p>Turn Caffiene into Code Eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                </a>
                <a href="/datathon">
                    <div className='scard'>
                        <div className='image'>
                            <BsClipboardData className='icon'/>
                        </div>
                        <h3>Datathon</h3>
                        <div className='line'></div>
                        <p>Turn Caffiene into Code Eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                </a>
                <a href="/designthinking">
                    <div className='scard'>
                        <div className='image'>
                            <GiDeadWood className='icon'/>
                        </div>
                        <h3>Design Thinking </h3>
                        <div className='line'></div>
                        <p>Turn Caffiene into Code Eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                </a>
                <a href="/breakingintosecurity">
                <div className='scard'>
                    <div className='image'>
                        <AiFillSecurityScan className='icon'/>
                    </div>
                    <h3>Breaking into Security </h3>
                    <div className='line'></div>
                    <p>Turn Caffiene into Code Eaque ipsa quae ab illo inventore veritatis</p>
                </div>`
                </a>
            </div>
        </div>
    )
}


export default Events;



