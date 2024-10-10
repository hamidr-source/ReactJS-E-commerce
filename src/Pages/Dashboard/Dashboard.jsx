import React from 'react'
import { Cookies } from 'react-cookie'

const Dashboard = () => {
  const cookies = new Cookies()

  return (
    <h1>Hey Dear {cookies.cookies.user}</h1>
  )
}

export default Dashboard