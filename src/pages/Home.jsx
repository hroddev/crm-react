import { useEffect } from 'react'

const Home = () => {

  useEffect( () => {
    const getClient = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const resp = await fetch(url)
        const resul = await resp.json()
        console.log(resul)
      } catch (error) {
        console.log(error)
      }
    }
  },[])
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  )
}

export default Home
