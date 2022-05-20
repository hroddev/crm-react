import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ShowClient = () => {

    const {id}= useParams()

    const [client, setClient] = useState({})

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
        }
        getClient()
    }, [])

        return (
        <div>
            <h2>Ver Cliente</h2>
        </div>
    )
}

export default ShowClient
