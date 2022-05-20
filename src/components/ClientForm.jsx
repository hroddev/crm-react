import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert'

const ClientForm = () => {

    const navigate = useNavigate()

    const newClientShema = Yup.object().shape({
        name: Yup.string()
                    .min(3,'El nombre es muy corto')
                    .max(20,'El nombre es muy corto')
                    .required('El nombre del cliente es obligatorio'),
        company: Yup.string()
                    .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
                    .email('Email no valido')
                    .required('El email es requerido'),
        phone: Yup.number()
                    .positive('No es valido')
                    .integer('No es valido')
                    .typeError('No es valido')
    })

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:4000/clientes'

            const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(resp)
            const result = await resp.json()
            console.log(result)
            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h2 className="text-gray-600 font-bold text-xl uppercase text-center"> Agrega Cliente</h2>

            <Formik
                initialValues={{
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    notes: ''

                }}
                onSubmit= { async (v, {resetForm}) => {
                    await handleSubmit(v)
                    resetForm()
                } }
                validationSchema={newClientShema}
            >
                {({errors, touched}) => {
                    return (
                <Form className="mb-10">
                    <div className='mb-4'>
                        <label className='text-gray-800'
                            httpfor="name"
                            >Nombre
                        </label>
                        <Field
                            id="name"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre del Cliente"
                            name="name"
                        />
                        {errors.name && touched.name ? (
                            <Alert>{errors.name}</Alert>
                        ) : null}
                    </div>
                    <div className='mb-4'>
                        <label className='text-gray-800'
                            httpfor="company"
                            >Empresa
                        </label>
                        <Field
                            id="company"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre de la empresa"
                            name="company"
                        />
                        {errors.company && touched.company ? (
                            <Alert>{errors.company}</Alert>
                        ) : null}
                    </div>
                    <div className='mb-4'>
                        <label className='text-gray-800'
                            httpfor="email"
                            >E-mail
                        </label>
                        <Field
                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Email del Cliente"
                            name="email"
                        />
                        {errors.email && touched.email ? (
                            <Alert>{errors.email}</Alert>
                        ) : null}
                    </div>
                    <div className='mb-4'>
                        <label className='text-gray-800'
                            httpfor="phone"
                            >Telefono
                        </label>
                        <Field
                            id="phone"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Telefono del Cliente"
                            name="phone"
                        />
                        {errors.phone && touched.phone ? (
                            <Alert>{errors.phone}</Alert>
                        ) : null}
                    </div>
                    <div className='mb-4'>
                        <label className='text-gray-800'
                            httpfor="notes"
                            >Notas
                        </label>
                        <Field
                            as="textarea"
                            id="notes"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50 h-40"
                            placeholder="Notas del Cliente"
                            name="notes"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Agregar Cliente"
                        className='mt-5 p-3 w-full bg-blue-800 text-white uppercase font-bold text-lg hover:bg-blue-600'
                    />
                </Form>
                )}}
            </Formik>
        </div>
    )
}

export default ClientForm
