// Function component (ffc) (rcfe) o (rcfp con PropTypes)
import React from 'react'

// function Header({ numeros, isAdmin, fn, tomaValor }) {
//   console.log(numeros)
//   console.log(isAdmin)
//   fn()
//   tomaValor('queda tres')

//   return (
//     <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
//       Seguimiento Pacientes&nbsp;
//       <span className='text-indigo-600'>Veterinaria</span>
//     </h1>
//   )
// }

function Header() { 
  return (
    <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
      Seguimiento Pacientes&nbsp;
      <span className='text-indigo-600'>Veterinaria</span>
    </h1>
  )
}

export default Header