import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const ShowClient = () => {

    const {id}= useParams()

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getClient = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
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
            // validate if the id exist
            Object.keys(client).length === 0 ? <p>No hay resultados</p> : (
                <div>
                    {loading ? <Spinner /> : (
                    <>
                        <h1 className='font-black text-blue-900 text-4xl mb-3'>Ver Cliente: {client.name}</h1>
                        <p>Imformación del Cliente</p>

                        <p className="text-2xl text-gray-700 mt-10">
                            <span className="uppercase font-bold">Cliente: </span>
                            {client.name}
                        </p>
                        <p className="text-2xl text-gray-700 mt-4">
                            <span className="uppercase font-bold">Email: </span>
                            {client.email}
                        </p>
                        {client.phone && (
                            <p className="text-2xl text-gray-700 mt-4">
                            <span className="uppercase font-bold">Telefono: </span>
                            {client.phone}
                        </p>
                        )}
                        {client.notes && (
                            <p className="text-2xl text-gray-700 mt-4">
                                <span className="uppercase font-bold">Notas: </span>
                                {client.notes}
                            </p>
                        )}
                    </>
                    )}
                </div>
            )
    )
}

export default ShowClient
