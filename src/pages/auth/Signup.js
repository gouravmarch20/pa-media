import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../features/authSlice'
import  './css/register.css'
export const Signup = () => {
  const [userSignUpData, setUserSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const dispatch = useDispatch()

  const { token, isLoggedIn } = useSelector(state => state.auth)

  const { firstName, lastName, email, password } = userSignUpData

  const navigate = useNavigate()

  useEffect(() => {
    if (token !== '' && isLoggedIn) {
      navigate('/')
    }
  })


  const submitSignupFormData = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" 
    ) {
      let username = email.split("@")[0];
      dispatch(signupUser({ ...userSignUpData, username: username }));
    } else {
      // setFormError("Spaces are not valid input.");
    }
  };

  return (
    <div className='signup'>
      <h2 className='text-center'>Registration</h2>

      <form className='signup-form' onSubmit={e => e.preventDefault()}>
        <div className='input-box'>
          <label htmlFor='firstName' className='label'>
            {' '}
            FirstName
          </label>

          <input
            type='text'
            className='input-style'
            id='firstName'
            name='firstName'
            placeholder='Enter your firstName'
            value={userSignUpData.firstName}
            required
            onChange={e =>
              setUserSignUpData({
                ...userSignUpData,
                firstName: e.target.value
              })
            }
          />
        </div>

        <div className='input-box'>
          <label htmlFor='lastName' className='label'>
            {' '}
            LastName
          </label>

          <input
            type='text'
            className='input-style'
            id='lastName'
            name='lastName'
            placeholder='Enter your lastName'
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, lastName: e.target.value })
            }
            value={userSignUpData.lastName}
            required
          />
        </div>
        <div className='input-box'>
          <label htmlFor='email' className='label'>
            {' '}
            Email
          </label>
          <input
            className='input-style'
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required
            value={userSignUpData.email}
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, email: e.target.value })
            }
          />
        </div>

        <div className='input-box'>
          <label htmlFor='password' className='label'>
            {' '}
            Password
          </label>

          <input
            className='input-style'
            type='password'
            name='password'
            id='password'
            placeholder='Create password'
            value={userSignUpData.password}
            onChange={e =>
              setUserSignUpData({ ...userSignUpData, password: e.target.value })
            }
            required
          />
        </div>
        <button type='submit' className='signup-btn' onClick={submitSignupFormData}>
          Register Now
        </button>
        <p className='signin-btn'>
          Already have an account? <Link to='/signin'>Login now</Link>
        </p>
      </form>
    </div>
  )
}
