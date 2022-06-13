import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Aadi',
    lastName: 'Shetty',
    username: 'adarshshetty',
    email: 'adarshshetty@gmail.com',
    password: 'adarshshetty123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
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
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
        avatar:
          'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
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
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
        avatar:
          'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
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
    portfolio: 'https://abhishekgautam.netlify.app/',
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
        avatar:
          'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
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
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
        avatar:
          'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
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
    password: 'gouravm20@123A',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: 'https://joeschmoe.io/api/v1/jana',
    bio: 'Mern stack developer',
    portfolio: 'https://trixoon.com/',
    following: [
      {
        _id: uuid(),
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
        avatar: 'https://joeschmoe.io/api/v1/jeane'
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: 'Aadi',
        lastName: 'Shetty',
        username: 'adarshshetty',
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
    //TODO: BOOKMARK 
    bookmarks: [
     
    ]
  }
]
