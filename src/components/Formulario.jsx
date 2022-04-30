import React, { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ paciente, setPaciente, pacientes, setPacientes }) => {

  // Se define el estado
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    setPacientes(localStorage.getItem('pacientes') ? JSON.parse(localStorage.getItem('pacientes')) : [])
  }, [])

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).slice(2)
    const fecha = Date.now()
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo vacío')
      setError(true)
      return
    }

    setError(false)

    // Obj en memoria del form
    const objPaciente = {     
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      // Editar registro existente
      objPaciente.id = paciente.id
      const pacientesAct = pacientes.map(p => p.id === paciente.id ? objPaciente : p)
      setPacientes(pacientesAct)
      setPaciente({})
    } else {
      // Nuevo registro, añadimos el Id
      objPaciente.id = generarId()
      setPacientes([objPaciente, ...pacientes])
    }   

    // Reset form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Añade pacientes y <span className='font-bold text-indigo-600'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg px-5 py-10 mb-10'>
        {error && (
          <Error mensaje="Todos los campos son obligatorios!!">
            <small><u>Por favor corrígelo antes de continuar</u></small>
          </Error>
        )}

        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            type='text'
            id='mascota'
            name='mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400'
            placeholder='Nombre de la mascota' />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            type='text'
            id='propietario'
            name='propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400'
            placeholder='Nombre del propietario' />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'>
            Correo electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400'
            placeholder='Correo electrónico contacto propietario' />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
            type='date'
            id='alta'
            name='alta'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400' />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'>
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            rows={3}
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder='Describe los Síntomas'
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400' />
        </div>

        <input
          type="submit"
          className='hover:bg-indigo-700 p-3 bg-indigo-600 rounded-lg text-white w-full uppercase font-bold cursor-pointer transition-colors'
          value={paciente.id ? "Editar paciente" : "Agregar paciente"} />

      </form>
    </div>
  )
}

export default Formulario