import React from 'react'
import story_1 from '../assets/story-1.jpeg'
import story_2 from '../assets/story-2.jpeg'

const Story = () => {
  return (
    
        <div className="story__pictures">
            <img src={story_1} alt="couples love :)" className="story__img-1"/>
            <img src={story_2} alt="couples love :)" className="story__img-2"/>
        </div>
  )
}

export default Story