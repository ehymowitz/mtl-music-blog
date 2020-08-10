import React from 'react'
import TopNav from './top-nav'

export default function Layout({children}) {
  return (
    <div>
      <TopNav/>
      {children}
    </div>
  )
}
