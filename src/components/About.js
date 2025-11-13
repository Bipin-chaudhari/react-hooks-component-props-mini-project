import React from 'react'

export const About = ({image, about}) => {
  return (
    <div>
        <aside>
          <img src={image ? image : "https://via.placeholder.com/215"} alt="I made this" />
          <p>{about}</p>
        </aside>
    </div>
  )
}
