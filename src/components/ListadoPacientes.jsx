import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length > 0 ?
        (
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-5'>
              Administras tus &nbsp;
              <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>

            {pacientes.map((p) => (
              <Paciente key={p.id} paciente={p} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
            ))}
          </>
        )
        :
        (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-lg mt-5 text-center mb-5'>
              Comienza agregando pacientes &nbsp;
              <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes