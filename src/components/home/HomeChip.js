import React from 'react'
import './css/homeChip.css'
export const HomeChip = ({ postData }) => {

  return (
    <div>
      <div className='home-chip-wrapper'>
        {postData.length === 0 ? null : (
          <>
            <button>Latest</button>
            <button> Oldest </button>
          </>
        )}
      </div>
    </div>
  )
}
