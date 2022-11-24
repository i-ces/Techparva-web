import React from 'react';
import Copyright from '../../components/copyright/copyright';
import RegisterPage from '../registerpage/registerpage';


const Security = () =>{
    return(
        <div className='security'>
            <RegisterPage 
            title="Breaking into Security"
            time="2 - 3pm"
            date="3rd May, 2022"
            location="CIT Hall, WRC"
            countdown_time="12/01/2022"
            />
            <Copyright/>

        </div>
    )
}

export default Security;