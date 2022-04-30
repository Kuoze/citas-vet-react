
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const {id, nombre, propietario, email, fecha, sintomas } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
   
    return (
        <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: &nbsp;
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: &nbsp;
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: &nbsp;
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: &nbsp;
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas: &nbsp;
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => setPaciente(paciente)}
                    type='button'>
                    Editar
                </button>
                <button
                    className='py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    onClick={handleEliminar}
                    type='button'>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente