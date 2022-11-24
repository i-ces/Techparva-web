import React from 'react';
import Copyright from '../../components/copyright/copyright';
import Events from '../../components/events/events';
import Landingpage from '../../components/landingpage/landingpage';


const Main = () =>{
    return(
        <div className='main'>
            <Landingpage/>
            <Events/>
            <Copyright/>
        </div>
    )
}

export default Main;