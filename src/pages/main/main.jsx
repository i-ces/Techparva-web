import React from 'react';
import Copyright from '../../components/copyright/copyright';
import Events from '../../components/events/events';
import Sponsors from '../../components/sponsors/sponsors';
import Team from '../../components/team/team.jsx';
import Landingpage from '../../components/landingpage/landingpage';



const Main = () => {
    return (
        <div className='main'>
            <Landingpage />
            <Events />
            <Sponsors />
            <Team />
            <Copyright />
        </div>
    )
}

export default Main;