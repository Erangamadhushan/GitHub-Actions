import axios from 'axios'

function App() {
  const handleViewItems = async () => {
    try {
      const response = await axios.get('/api/items')
      console.log('Items:', response.data)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  return (
    <>
      {/* simple crud app */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">GitHub Actions CRUD App</h1>
        {/* Add your CRUD components here */}
        <p className="text-gray-600">This is a simple CRUD application using React, Vite, and Tailwind CSS.</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleViewItems}>View Item</button>
        </div>

      </div>
    </>
  )
}

export default App
