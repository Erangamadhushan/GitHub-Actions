import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="mb-8">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="h-16 w-16 mx-4" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="h-16 w-16 mx-4" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl mb-4">Vite + React + TypeScript + Tailwind CSS</h1>
        <div className="text-center">
          <p className="mb-4">Count is: {count}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  )
}

export default App
