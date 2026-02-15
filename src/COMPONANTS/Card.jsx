import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noreferrer" className="video-card">
        <img src={props.src} alt="React Basics Tutorial" height={300} width={450} />
        <h3>{props.title}</h3>
        <p>{props.channelname}</p>
        <p>{props.views}</p>
        <p>{props.id}</p>
      </a>

    </div>
  )
}

export default Card
