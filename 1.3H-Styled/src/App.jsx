import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './styledcomponents/Button'
import Card from './styledcomponents/Card'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Vite + React</h1>
        <Card variant="primary">
          <Button variant="secondary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Card>      
    </>
  )
}

export default App
