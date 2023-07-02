import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='bg-gray-700 text-white rounded shadow-md px-2 hover:bg-orange-600 hover:text-gray-700'>
        Hello
      </button>

    </>
  )
}

// Write a react component for a home page


export default App
