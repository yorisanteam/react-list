import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
      <div>
        <div>NotFound</div>
        <div>{<Link to={'/'}>Homeへ</Link>}</div>
    </div>

  )
}

export default NotFound
