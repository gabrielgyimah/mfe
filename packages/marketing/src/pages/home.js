import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Welcom to Home
      <Link to={'/pricing'} className=''>Go to Pricing</Link>
    </div>
  )
}
