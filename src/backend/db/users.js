import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    email: 'adarshbalika@gmail.com',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/jeane',
    bio: 'Software Engineer @Microsoft',
    portfolio: 'https://github.com',
    followers: [
      {
        _id: uuid(),
        firstName: 'Admin',
        lastName: 'Kumar',
        username: 'adminkumar',
        avatar: 'https://joeschmoe.io/api/v1/joe'
      },
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/jana'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Admin',
        lastName: 'Kumar',
        username: 'adminkumar',
        avatar: 'https://joeschmoe.io/api/v1/joe'
      },
      {
        _id: uuid(),
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james'
      },
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/jana'
      }
    ],
    bookmarks: []
  },
  {
    _id: uuid(),
    firstName: 'Admin',
    lastName: 'Kumar',
    username: 'adminkumar',
    email: 'adminkumar@gmail.com',
    password: 'admin@123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/jai',
    bio: 'Frontend Engineer @Razorpay',
    portfolio: 'https://github.com',
    following: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      },
      {
        _id: uuid(),
        firstName: 'apple',
        lastName: 'x',
        username: 'apple',
        avatar:
          'https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png'
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      }
    ],
    bookmarks: []
  },

  {
    _id: uuid(),
    firstName: 'Abhishek',
    lastName: 'Gautam',
    username: 'abhishekgautam',
    email: 'abhishekgautam243@gmail.com',
    password: 'abhishekgautam243',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/james',
    bio: 'Building Frontend',
    portfolio: 'https://github.com/AbhishekkGautam',
    following: [
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/jana'
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      },
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/jana'
      },
      {
        _id: uuid(),
        firstName: 'Admin',
        lastName: 'Kumar',
        username: 'adminkumar',
        avatar: 'https://joeschmoe.io/api/v1/joe'
      }
    ],
    bookmarks: []
  },
  {
    _id: uuid(),
    firstName: 'apple',
    lastName: 'x',
    username: 'apple',
    email: 'apple@gmail.com',
    password: 'apple123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      'https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png',
    bio: 'aplel',
    portfolio: 'https://www.apple.com/in/',
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      },
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      }
    ],
    bookmarks: []
  },
  {
    _id: uuid(),
    firstName: 'gourav',
    lastName: 'mishra',
    username: 'gouravm',
    email: 'gouravm@gmail.com',
    password: 'gouravm123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/jana',
    bio: 'Developer',
    portfolio: 'https://trixoon.com/',
    following: [
      {
        _id: uuid(),
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james'
      },
      {
        _id: uuid(),
        firstName: 'apple',
        lastName: 'x',
        username: 'apple',
        avatar:
          'https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png'
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      }
    ],
    bookmarks: []
  }
]
