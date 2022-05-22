import axios from 'axios'

export const loginService = async (username, password) => {
  return await axios.post('/api/auth/login', { username, password })
}

export const signupService = async (
  firstName,
  lastName,
  email,
  password,
  username
) => {
  return await axios.post('/api/auth/signup', {
    firstName,
    lastName,
    email,
    password,
    username
  })
}
