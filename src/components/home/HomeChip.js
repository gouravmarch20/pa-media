import React from 'react'
import './css/homeChip.css'

import { useDispatch, useSelector } from 'react-redux'
import { setFilterText } from '../../features/postSlice'

export const HomeChip = ({ postData }) => {
  const dispatch = useDispatch()
  const { filterText } = useSelector(state => state.posts)
  const filterTypeHandler = type => {
    dispatch(setFilterText(type))
  }

  return (
    <div>
      <div className=''>
        {postData.length <= 1 ? null : (
          <>
            <button
              className={`home-chip mt-16  ${
                filterText === 'Trending' ? 'home-chip-selected' : ''
              }`}
              onClick={() => filterTypeHandler('Trending')}
            >
              Trending
            </button>
            <button
              className={`home-chip mt-16  ${
                filterText === 'Latest' ? 'home-chip-selected' : ''
              }`}
              onClick={() => filterTypeHandler('Latest')}
            >
              Latest
            </button>
            <button
              className={`home-chip mt-16  ${
                filterText === 'Oldest' ? 'home-chip-selected' : ''
              }`}
              onClick={() => filterTypeHandler('Oldest')}
            >
              {' '}
              Oldest{' '}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
