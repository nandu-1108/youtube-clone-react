import React from 'react'
import { useParams, Link } from 'react-router-dom'
import vedios from '../data/vedios'

const Watch = () => {
  const { id } = useParams()
  const video = vedios.find((v) => v.id === id)

  if (!video) return <h2>Video not found</h2>

  const youtubeId = new URL(video.url).searchParams.get('v')

  const others = vedios.filter((v) => v.id !== id)
  const related = [
    ...others.filter((v) => v.category === video.category),
    ...others.filter((v) => v.category !== video.category),
  ]

  return (
    <div style={{ display: 'flex', gap: 24, padding: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ flex: '2 1 600px' }}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={video.Title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <h2>{video.Title}</h2>
        <p>{video.Channelname} • {video.Views}</p>
      </div>

      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3>Related videos</h3>
        {related.map((v) => (
          <Link
            key={v.id}
            to={`/watch/${v.id}`}
            style={{ display: 'flex', gap: 10, color: 'inherit', textDecoration: 'none' }}
          >
            <img src={v.src} alt={v.Title} width={160} height={90} style={{ objectFit: 'cover', borderRadius: 8 }} />
            <div>
              <strong style={{ fontSize: 14 }}>{v.Title}</strong>
              <p style={{ margin: '4px 0', fontSize: 12 }}>{v.Channelname}</p>
              <p style={{ margin: 0, fontSize: 12 }}>{v.Views}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Watch