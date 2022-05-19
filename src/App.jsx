import { Route, Routes, BrowserRouter }  from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='nuevo' element={<NewClient/>} />
            <Route path='editar/:id' element={<EditClient/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
