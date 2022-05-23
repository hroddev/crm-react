import { useState ,useEffect } from 'react'
import Client from '../components/Client'


const Home = () => {

  const [clients, setClients] = useState([])

  useEffect( () => {
    const getClient = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const resp = await fetch(url)
        const resul = await resp.json()
        setClients(resul)
      } catch (error) {
        console.log(error)
      }
    }
    getClient()
  },[])

  const handleDelete = async id => {
    const confirmar = confirm('¿Deseas eliminar el registro?')

    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const resp = await fetch(url, {
          method: 'DELETE'
        })
        await resp.json()

        const arrayClients = clients.filter( cliente => cliente.id !== id )
        setClients(arrayClients)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl mb-3'>Clientes</h1>
      <p>Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>

        <tbody>
            {clients.map( client => (
              <Client
                  key={client.id}
                  client={client}
                  handleDelete={handleDelete}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Home
