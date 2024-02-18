import { useState } from 'react';
import "./Form.css"

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form className='enquire-form' onSubmit={handleSubmit}>
        <div className='form-inputs'>
            <div className='form-input'>
                <label>First Name 
                </label>
                <input placeholder='First Name' />
            </div>
            <div className='form-input'>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </div>
        </div>
        <div className='form-input'>
            <label>Email
            </label>
            <input placeholder='Email' />
        </div>
        <div className='form-input'>
            <label>Phone Number
            </label>
            <input placeholder='Phone Number' />
        </div>
        <div className='form-input'>
            <label>Message 
            </label>
            <textarea placeholder=''  />
         </div>
        <button className="btn" type="submit" >Submit</button>
    </form>
  )
}

export default Form;

/*
<label>Enter your age:
<input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
</label>
*/ 