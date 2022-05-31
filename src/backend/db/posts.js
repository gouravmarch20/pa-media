import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: `This storm will be over and the kites would fly again. 
      It's just a matter of time.`,
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
          avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
        }
      ],
      dislikedBy: []
    },
    firstName: 'Adarsh',
    lastName: 'Balika',
    avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
    username: 'adarshbalika',
    createdAt: 'May 14 2022',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: 'Abhishek',
        lastName: 'Gautam',
        username: 'abhishekgautam',
        avatar: 'https://joeschmoe.io/api/v1/james',
        text: 'Kab tak dependent rahoge',
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
        text: 'Jay Shree Krishna        !',
        createdAt: new Date('May 15 2022 08:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ]
  },
  {
    _id: uuid(),
    content: 'Infinity is completely relative depending on the context. .',
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
    avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
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
        text: 'Interesting',
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
        text: ' infinity is just a concept!',
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
    content:
      'Apple is now going green with a goal of becoming 100% carbon neutral by 2030.',
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
          avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
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
        avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
        createdAt: new Date('May 16 2022 18:02:30'),
        text: 'Interesting',
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
        text: 'Wow!',
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
    content: 'love to buid quality product !',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Adarsh',
          lastName: 'Balika',
          username: 'adarshbalika',
          avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
        }
      ],
      dislikedBy: []
    },

    firstName: 'apple',
    lastName: 'xoon',
    username: 'apple',
    avatar: 'https://lofrev.net/wp-content/photos/2014/09/Apple-logo.png',

    comments: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
        createdAt: new Date('May 20 2022 18:02:30'),
        text: ' we would like to see !        ',
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
        text: 'Wow!',
        createdAt: new Date('May 21 2022 11:02:30'),
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ],
    createdAt: 'May 20 2022 16:02:30',
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: 'Build in public , lets build together!',
    likes: {
      likeCount: 1,
      likedBy: [
    
        {
          _id: uuid(),
          firstName: 'Adarsh',
          lastName: 'Balika',
          username: 'adarshbalika',
          avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png'
        }
      ],
      dislikedBy: []
    },

    firstName: 'gourav',
    lastName: 'mishra',
    username: 'gouravm20',
    avatar: 'https://joeschmoe.io/api/v1/jana',

    comments: [
      {
        _id: uuid(),
        firstName: 'Adarsh',
        lastName: 'Balika',
        username: 'adarshbalika',
        avatar: 'https://pbs.twimg.com/profile_images/631330667444334592/tVu8zg2X_400x400.png',
        createdAt: new Date('May 20 2022 18:02:30'),
        text: ' we would like to see !        ',
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
        text: 'Wow!',
        createdAt: new Date('May 21 2022 11:02:30'),
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
