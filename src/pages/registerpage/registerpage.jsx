import React, {useState, useEffect} from 'react';
import Timer from '../../components/timer/timer';
import Navig from '../../components/navig/navig';
import './registerpage.css'
import Registrationform from '../../components/registrationform/registrationform';
import {ImCross} from 'react-icons/im'

const RegisterPage = (props) =>{

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const initialdata = {
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:''
    }

    const [formvalue, setFormvalue] = useState(initialdata)
    const handleinputChange = e => {
      var { name, value } = e.target
      setFormvalue({
          ...formvalue,
          [name]: value
      })
      console.log(formvalue)
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        if (formvalue.name === null) {
            alert('Message field empty')
        }
        else {
            fetch("http://localhost:3000/", {
                method: "POST",
                body: JSON.stringify(formvalue),
                headers: {
                    "Content-type": "application/json",
                    'X-CSRFToken': csrftoken
                }
            })

                .then(response => response.json())
                setFormvalue(initialdata)
                setregistrationmodal(false)


        }

    }

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
                <button onClick={()=>setregistrationmodal(true)} disabled={true}>Opening Today</button>
                </div>
                
            </div>
        </div>
        <Timer countdown_time={props.countdown_time}/>
        {registrationmodal===true && 
        <div className="registrationmodal">
            <div className='modalcontainer'>
                <h2>Join the Event</h2>
                <div className='form'>
                    <div className='input_field'>
                        <h3>Name</h3>
                        <input type="text" onChange={handleinputChange} name="name" placeholder='Enter your name' value={formvalue.name} required/>
                    </div>   
                    <div className='input_field'>
                        <h3>question2</h3>
                        <input type="text" onChange={handleinputChange} name="question2" placeholder='question2' value={formvalue.question2} required/>
                    </div> 
                    <div className='input_field'>
                        <h3>question3</h3>
                        <input type="text" onChange={handleinputChange} name="question3" placeholder='question3' value={formvalue.question3} required/>
                    </div> 
                    <div className='input_field'>
                        <h3>question4</h3>
                        <input type="text" onChange={handleinputChange} name="question4" placeholder='question4' value={formvalue.question4} required/>
                    </div> 
                    <div className='input_field'>
                        <h3>question5</h3>
                        <input type="text" onChange={handleinputChange} name="question5" placeholder='question5' value={formvalue.question5} required/>
                    </div> 
                    <div className='input_field'>
                        <h3>question6</h3>
                        <input type="text" onChange={handleinputChange} name="question6" placeholder='question6' value={formvalue.question6} required/>
                    </div>
                    <div className='submit'>
                        <button onClick={handleFormSubmit}>Register</button>
                    </div> 
                </div>
            </div>
            <div className='cross' onClick={()=>setregistrationmodal(false)}><ImCross className="crossicon"/></div>
        
        </div>
    
    }
    </div>


    )
}

export default RegisterPage;