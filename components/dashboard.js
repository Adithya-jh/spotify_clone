import React from 'react'
import Sidebar from './sidebar'
import Body from './body'
import Right from './right'

function dashboard() {
  return <main>
      <Sidebar/>
      <Body/>
      <Right/>
  </main>
}
export default dashboard