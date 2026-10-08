import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoLogoYoutube } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const Index = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/?search=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70, padding: '0 20px', gap: 20 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'inherit', textDecoration: 'none' }}>
        <IoLogoYoutube size={36} color="red" />
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>YouTube</span>
      </Link>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flex: 1, maxWidth: 600 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos and content"
          style={{ flex: 1, height: 36, padding: '0 14px', borderRadius: '20px 0 0 20px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ height: 38, padding: '0 16px', borderRadius: '0 20px 20px 0', border: '1px solid #ccc', cursor: 'pointer' }}>
          <IoSearch size={18} />
        </button>
      </form>

      <div style={{ width: 120 }} />
    </div>
  )
}

export default Index