import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })

    const { name, email, password, password2 } = formData
    const onChange = e => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value

    }))
    }
    
    const onSubmit = e => {
      e.preventDefault()
    }


  return (
  <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please Create an Account</p>
    </section>

    <section className='form'>
      <form onSubmit={ onSubmit }>
        <div className='form-group'>
          <input
            type="text"
            className="form-control"
            id='name'
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type="text"
            className="form-control"
            id='email'
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type="text"
            className="form-control"
            id='password'
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type="text"
            className="form-control"
            id='password2'
            placeholder="Re Enter your password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
  
  </>
  )
}

export default Register