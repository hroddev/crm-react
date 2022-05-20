import ClientForm from "../components/ClientForm"

const NewClient = () => {
  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl'>Nuevo Cliente</h1>
      <p>Llena los siguientes campos pararegistrar un cliente</p>
      <ClientForm />
    </>
  )
}

export default NewClient
