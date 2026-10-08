import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../COMPONANTS/Card'
import vedios from '../data/vedios'

const categories = ['All', 'Coding', 'Music', 'Gaming', 'Sports']

const Home = () => {
  const [params] = useSearchParams()
  const [selected, setSelected] = useState('All')
  const q = (params.get('search') || '').toLowerCase()

  const filtered = vedios.filter((v) => {
    const matchesSearch =
      v.Title.toLowerCase().includes(q) ||
      v.Channelname.toLowerCase().includes(q)
    const matchesCategory = selected === 'All' || v.category === selected
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, padding: '0 20px 20px', flexWrap: 'wrap' }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: selected === c ? 'black' : '#e5e5e5',
              color: selected === c ? 'white' : 'black',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
        {filtered.length === 0 && <h3>No videos found</h3>}
        {filtered.map((v) => (
          <Card
            key={v.id}
            id={v.id}
            title={v.Title}
            channel={v.Channelname}
            views={v.Views}
            src={v.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Home