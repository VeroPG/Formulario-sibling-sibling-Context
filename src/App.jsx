// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/MainComponent'
import { UserContext } from './context/UserContext'

function App() {
  const [email, setEmail] = useState(null)

  return (
    <>
      <UserContext.Provider value={{ email, setEmail }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  )
}

export default App
