import React, {useState, useEffect} from 'react';
import inputfields from '../form_data';

const Registrationform = () =>{


    
    
    var initialdata = {}

    
    for(var i =0; i<inputfields.length;i++){
      initialdata[inputfields[i].name] = inputfields[i].value

    }
    // console.log(initialdata)
    const [formvalue, setFormvalue] = useState(initialdata)
    const handleinputChange = e => {
      var { name, value } = e.target
      setFormvalue({
          ...formvalue,
          [name]: value
      })
    }
  

   
    const [thiscollege, setthiscollege] = useState("true")
 
    /* https://shrouded-river-94190.herokuapp.com/form */
   

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formvalue)
        fetch("https://shrouded-river-94190.herokuapp.com/registerdetails", {
          method: 'POST',
          body: JSON.stringify(formvalue),
          headers: {
              'Content-Type': 'application/json',
              'Origin': 'localhost'
          },
          credentials: 'same-origin'
        
        });
    }
    var htmlelements = [];
    return(
        <div className="form">
                                <form id="myform" onSubmit={handleFormSubmit}>
                                    {
                                      inputfields.map((each_inputfields, key)=>{
                                        //console.log(each_inputfields);
                                        switch (each_inputfields.type) {
                                          case 'checkbox':
                                            htmlelements.push(<div className="input_field">
                                              <h4>Are you from this college?</h4>
                                              <div className="checkbox">
                                                <input type="checkbox" checked={ {thiscollege} } onChange={(e)=>{ setthiscollege(e.target.checked) } } value="yes" name="yes"/><label>Yes</label>
                                              </div>
                                              { 
                                                thiscollege === false &&
                                                <div className="input_field">
                                                  <h4>Your College Name</h4>
                                                  <input type="text" placeholder={ each_inputfields.placeholder } name={ each_inputfields.name } value={ formvalue[each_inputfields.name] } onChange={ handleinputChange } id={ each_inputfields.id } />
                                                </div>
                                              }
                                            </div>);
                                            break;

                                            case 'number':
                                              htmlelements.push(<div className="input_field">
                                                  <h4>{ each_inputfields.title }</h4>
                                                  <input type={ each_inputfields.type } min="9800000000" max="9899999999" placeholder={ each_inputfields.placeholder } value={ formvalue[each_inputfields.name] } name={ each_inputfields.name } onChange={handleinputChange} id={ each_inputfields.id } />
                                              </div>);
                                              break;

                                          default:
                                            htmlelements.push(<div className="input_field">
                                              <h4>{each_inputfields.title}</h4>
                                              <input type={each_inputfields.type} placeholder={each_inputfields.placeholder} value={ formvalue[each_inputfields.name] }  name={each_inputfields.name} onChange={handleinputChange} id={each_inputfields.id} />
                                            </div>);
                                            break;
                                        }               
                                      }
                                    )
                                    }
                                    { htmlelements }
                                    <div className="button">
                                        <input type="submit" value="Register for the Event" />
                                    </div>
                                </form>
                        </div>
    )
}

export default Registrationform;

