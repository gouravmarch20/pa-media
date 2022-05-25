import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // p1
  {
    _id: uuid(),
    content: 'A programmer finds himself in front of a committee',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Abhishek',
          lastName: 'Gautam',
          username: 'abhishekgautam',
          avatar: 'https://joeschmoe.io/api/v1/james'
        },
        {
          _id: uuid(),
          firstName: 'Admin',
          lastName: 'Kumar',
          username: 'adminkumar',
          avatar: 'https://joeschmoe.io/api/v1/jai'
        },
        {
          _id: uuid(),
          firstName: 'Adarsh',
          lastName: 'Balika',
          username: 'adarshbalika',
          avatar: 'https://joeschmoe.io/api/v1/jeane'
        }
      ],
      dislikedBy: []
    },
    firstName: 'Adarsh',
    lastName: 'Balika',
    avatar: 'https://joeschmoe.io/api/v1/jeane',
    username: 'adarshbalika',
    createdAt: 'May 14 2022',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: 'gourav',
        lastName: 'mishra',
        username: 'gouravm',
        avatar: 'https://joeschmoe.io/api/v1/james',
        text: 'not understand',
        createdAt: new Date('May 14 2022 11:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      },
      {
        _id: uuid(),
        firstName: 'Admin',
        lastName: 'Kumar',
        username: 'adminkumar',
        avatar: 'https://joeschmoe.io/api/v1/jai',
        text: '😩',
        createdAt: new Date('May 15 2022 08:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ]
  },

  // p2

  {
    _id: uuid(),
    content:
      'Your new superpower. Now in Green. Save with Apple Trade In      ',
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Abhishek',
          lastName: 'Gautam',
          username: 'abhishekgautam',
          avatar: 'https://joeschmoe.io/api/v1/james'
        }
      ],
      dislikedBy: []
    },
    firstName: 'Adarsh',
    lastName: 'Balika',
    avatar: 'https://joeschmoe.io/api/v1/jeane',
    username: 'adarshbalika',
    createdAt: 'May 15 2022',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james',
        text: 'go green',
        createdAt: new Date('May 15 2022 11:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      },
      {
        _id: uuid(),
        firstName: 'Admin',
        lastName: 'Kumar',
        username: 'adminkumar',
        avatar: 'https://joeschmoe.io/api/v1/jai',
        text: 'apple green ❤️!',
        createdAt: new Date('May 15 2022 14:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ]
  },
  {
    _id: uuid(),
    content: 'the infinity is relative',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Abhishek',
          lastName: 'Gautam',
          username: 'abhishekgautam',
          avatar: 'https://joeschmoe.io/api/v1/james'
        },
        {
          _id: uuid(),
          firstName: 'Adarsh',
          lastName: 'Balika',
          username: 'adarshbalika',
          avatar: 'https://joeschmoe.io/api/v1/jeane'
        }
      ],
      dislikedBy: []
    },
    firstName: 'Admin',
    lastName: 'Kumar',
    username: 'adminkumar',
    avatar: 'https://joeschmoe.io/api/v1/jai',
    comments: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane',
        createdAt: new Date('May 16 2022 18:02:30'),
        text: '∞ symbol to detone infinity',
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      },
      {
        _id: uuid(),
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james',
        text: 'real or just a concept ?',
        createdAt: new Date('May 17 2022 11:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ],
    createdAt: 'May 16 2022 11:02:30',
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: 'looking at the star & dealing with scars',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Abhishek',
          lastName: 'Gautam',
          username: 'abhishekgautam',
          avatar: 'https://joeschmoe.io/api/v1/james'
        },
        {
          _id: uuid(),
          firstName: 'Adarsh',
          lastName: 'Balika',
          username: 'adarshbalika',
          avatar: 'https://joeschmoe.io/api/v1/jeane'
        }
      ],
      dislikedBy: []
    },

    firstName: 'gourav',
    lastName: 'mishra',
    username: 'gouravm',
    avatar: 'https://joeschmoe.io/api/v1/jana',
    comments: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://joeschmoe.io/api/v1/jeane',
        createdAt: new Date('May 20 2022 18:02:30'),
        text: 'Interesting',
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ],
    createdAt: 'May 20 2022 16:02:30',
    updatedAt: formatDate()
  }
]
