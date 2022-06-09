import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../features/authSlice'

import './css/login.css'
export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { token, isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (token !== '' && isLoggedIn) {
      navigate('/')
    }
  })

  const submitLoginFormData = () => {
    if (username !== '' && password !== '') {
      dispatch(loginUser({ username, password }))
    }
  }

  const submitLoginWithCredentials = () => {
    setUsername('gouravm20')
    setPassword('gouravm20@123')
    dispatch(loginUser({ username: 'gouravm20', password :"gouravm20@123"}))

    // dispatch(loginUser({ username, password }))

    // plealse login now -> tost
  }

  return (
    <div className='signin'>
      <h2 className='text-center'>SignIn</h2>
      <form className='signup-form' onSubmit={e => e.preventDefault()}>
        <div className='input-box'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            className='input-style'
            type='text'
            placeholder='Enter your email'
            id='email'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
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
            placeholder=' password'
            onChange={e => setPassword(e.target.value)}
            name='password'
            id='password'
            value={password}
          />
        </div>

        <div className=''>
          <button className='signup-btn' onClick={submitLoginFormData}>
            Login Now
          </button>
        </div>
        <div className=''>
          <button
            className='signup-btn sign-test'
            onClick={submitLoginWithCredentials}
          >
            {' '}
            Test the app{' '}
          </button>
        </div>
        <div className=''>
          <p className='signin-btn'>
            Don't have an account? <Link to='/signup'>Register Now</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
