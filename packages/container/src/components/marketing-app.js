import React, { useEffect, useRef } from 'react'
import { mount } from 'marketing/MarketingApp'

export default function MarketingApp () {
  const marketingAppRef = useRef(null)

  useEffect(() => {
    mount(marketingAppRef.current)
  }, [])
  return (
    <div ref={marketingAppRef} />
  )
}