import { useNavigate } from "react-router-dom"

const Client = ({client, handleDelete}) => {

    const navigate = useNavigate()

    const { name, company, email, phone, id } = client

    return (
        <tr className="border-b hover:bg-gray-50">
        <td className="p-3">{name}</td>
        <td className="p-3">
            <p><span className="text-gray-800 uppercase font-bold">Email: </span> {email} </p>
            <p><span className="text-gray-800 uppercase font-bold">Tel: </span> {phone} </p>
        </td>
        <td className="p-3">{company}</td>
        <td className="p-3">
            <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 block w-full text-with p-2 uppercase font-bold text-xs text-white"
                onClick={() => navigate(`/clientes/${id}`)}
            >Ver</button>
            <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 block w-full text-with p-2 uppercase font-bold text-xs text-white mt-2"
                onClick={() => navigate(`/clientes/editar/${id}`)}
            >Editar</button>
            <button
                type="button"
                className="bg-red-600 hover:bg-red-700 block w-full text-with p-2 uppercase font-bold text-xs text-white mt-2"
                onClick={() => handleDelete(id)}
            >Eliminar</button>
        </td>
        </tr>
    )
}

export default Client
