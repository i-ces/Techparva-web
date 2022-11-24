import React, {useState, useEffect} from 'react';
import Timer from '../../components/timer/timer';
import Navig from '../../components/navig/navig';
import './registerpage.css'


const RegisterPage = (props) =>{

    const [registrationmodal, setregistrationmodal] = useState(false)
        
    return(    
    <div className="outregisterpage">
        <div className="registerpage">
            <Navig/>
            <div className="registercontainer" style={{'paddingTop':'5%'}}>
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="programmetimings">
                    <h3><i className="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.date}</h3>
                    <h3><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.time}</h3>
                    <h3><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.location}</h3>
                </div>
                <div className="registerbutton">
                <button onClick={()=>setregistrationmodal(true)}>Opening Tomorrow</button>
                </div>
                
            </div>
        </div>
        <Timer countdown_time={props.countdown_time}/>
    </div>


    )
}

export default RegisterPage;