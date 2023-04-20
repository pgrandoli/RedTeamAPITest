import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })

    const { email, password,} = formData
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
        <FaSignInAlt /> Login
      </h1>
      <p>Login</p>
    </section>

    <section className='form'>
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
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>

    </section>
  
  </>
  )
}

export default Login