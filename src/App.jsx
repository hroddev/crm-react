import { Route, Routes, BrowserRouter }  from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import ShowClient from './pages/ShowClient'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='nuevo' element={<NewClient/>} />
            <Route path='editar/:id' element={<EditClient/>} />
            <Route path=':id' element={<ShowClient/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
