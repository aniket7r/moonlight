import { useState } from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp /> }></Route>
        <Route path='/signin' element={<SignIn /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
