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
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james'
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
    lastName: 'xoon',
    username: 'apple',
    email: 'apple@gmail.com',
    password: 'apple@123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://lofrev.net/wp-content/photos/2014/09/Apple-logo.png',

    bio: 'Build product',
    portfolio: 'https://twitter.com/apple',
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
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james'
      }
    ],
    bookmarks: []
  },
  {
    _id: uuid(),
    firstName: 'gourav',
    lastName: 'mishra',
    username: 'gouravm20',
    email: 'gouravm20@gmail.com',
    password: 'gouravm20@123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/jana',
    bio: 'Mern stack developer',
    portfolio: 'https://twitter.com/gouravmarch20',
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
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james'
      }
    ],
    bookmarks: []
  },
 
]
