import React, { useState, useEffect } from 'react';
import Timer from '../../components/timer/timer';
import Navig from '../../components/navig/navig';
import './registerpage.css'
import Registrationform from '../../components/registrationform/registrationform';
import { ImCross } from 'react-icons/im'

const RegisterPage = (props) => {

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
        name: '',
        batch: '',
        phone: '',
        email: '',
        prior_experience: '',
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
    let url = "";

    if (props.title == "Code with Coffee") {
        url = "https://techparva.aandbinternationalhospital.org/codewithcoffee/"
    }
    else if (props.title == "Design Incubation") {
        url = "https://techparva.aandbinternationalhospital.org/designincubation/"
    }
    else if (props.title == "Datathon") {
        url = "https://techparva.aandbinternationalhospital.org/datathon/"
    }
    else if (props.title == "BabyPwn") {
        url = "https://techparva.aandbinternationalhospital.org/babypwn/"
    }




    const handleFormSubmit = e => {
        e.preventDefault();
        if (formvalue.name === null) {
            alert('Message field empty')
        }
        else {
            fetch(url, {
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
            alert("Thank you. Your response was submitted.")


        }

    }

    const [registrationmodal, setregistrationmodal] = useState(false)

    return (
        <div className="outregisterpage">
            <div className="registerpage" style={{
                backgroundImage: `url(${props.background})`,
            }}>
                <Navig />
                <div className="registercontainer" style={{ 'paddingTop': '5%' }}>
                    <div className="title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="programmetimings">
                        <h3><i className="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.date}</h3>
                        <h3><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.time}</h3>
                        <h3><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.location}</h3>
                    </div>
                    <div className="registerbutton">
                        <a href={props.urll} target="blank">
                            <button>Register Now</button>
                        </a>
                    </div>

                </div>
            </div>
            <Timer countdown_time={props.countdown_time} />
            {registrationmodal === true &&
                <div className="registrationmodal">
                    <div className='modalcontainer'>
                        <h2>Join the Event</h2>
                        <div className='form'>
                            <div className='input_field'>
                                <h3>Name</h3>
                                <input type="text" onChange={handleinputChange} name="name" placeholder='Enter your name' value={formvalue.name} required />
                            </div>
                            <div className='input_field'>
                                <h3>Batch and Year</h3>
                                <input type="text" onChange={handleinputChange} name="batch" placeholder='eg: BEI075' value={formvalue.batch} required />
                            </div>
                            <div className='input_field'>
                                <h3>Phone Number</h3>
                                <input type="text" onChange={handleinputChange} name="phone" placeholder='Enter your phone number' value={formvalue.phone} required />
                            </div>
                            <div className='input_field'>
                                <h3>Enter your email</h3>
                                <input type="text" onChange={handleinputChange} name="email" placeholder='Email' value={formvalue.email} required />
                            </div>
                            <div className='input_field'>
                                <h3>Do you have prior Experience in this field? Do you want to participate in the Workshop?</h3>
                                <textarea onChange={handleinputChange} name="prior_experience" placeholder='Prior Experience' value={formvalue.prior_experience} required />
                            </div>
                            {/* <div className='input_field'>
                        <h3>question6</h3>
                        <input type="text" onChange={handleinputChange} name="question6" placeholder='question6' value={formvalue.question6} required/>
                    </div> */}
                            <div className='submit'>
                                <button onClick={handleFormSubmit}>Register</button>
                            </div>
                            <p>*If you have any problem submitting the form, contact at icesnepal@gmail.com</p>
                        </div>
                    </div>
                    <div className='cross' onClick={() => setregistrationmodal(false)}><ImCross className="crossicon" /></div>

                </div>

            }
        </div>


    )
}

export default RegisterPage;