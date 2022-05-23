import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ClientForm from "../components/ClientForm"

const EditClient = () => {

  const {id}= useParams()

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getClient = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const resp = await fetch(url)
                const resul = await resp.json()
                setClient(resul)
            } catch (error) {
                console.log(error)
            }
            setLoading(!loading)
        }
        getClient()
    }, [])
  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl mb-3'>Editar Cliente</h1>
      <p>Utiliza este formilario para editar los datos de los Clientes</p>

      {client?.name && (
        <ClientForm
          client={client}
          loading={loading}
        />
        )}
  </>
  )
}

export default EditClient
