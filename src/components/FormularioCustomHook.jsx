import React, {useState, useEffect} from 'react'
import { useForm } from '../hooks/useForm'

const Formulario = () => {
  // Se define el estado
  const [formValues, handleInputChange, reset] = useForm({
    mascota: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: ''
  })

  const {mascota, propietario, email, alta, sintomas} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Añade pacientes y <span className='font-bold text-indigo-600'>Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg px-5 py-10 mb-10'>
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
            value={mascota}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            value={alta}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            placeholder='Describe los Síntomas'
            className='border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400' />
        </div>

        <input 
          type="submit" 
          className='hover:bg-indigo-700 p-3 bg-indigo-600 rounded-lg text-white w-full uppercase font-bold cursor-pointer transition-colors'
          value="Agregar Paciente" />
          <button type="button" className='hover:bg-red-700 bg-red-600 rounded-lg text-white w-full mt-1 p-2 uppercase font-bold cursor-pointer transition-colors' onClick={() => reset()}>Reset</button>
      </form>
    </div>
  )
}

export default Formulario