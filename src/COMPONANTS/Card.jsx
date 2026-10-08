import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, channel, views, src }) => {
  return (
    <div>
      <Link to={`/watch/${id}`} className="video-card">
        <img src={src} alt={title} height={300} width={450} />
        <h3>{title}</h3>
        <p>{channel}</p>
        <p>{views}</p>
      </Link>
    </div>
  )
}

export default Card