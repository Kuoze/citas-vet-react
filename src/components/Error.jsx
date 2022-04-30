import React from 'react'

const Error = ({mensaje, children}) => {
    // Children, lo que hay dentro de las etiquetas sin necesidad de agregar props
    return (
        <div className='bg-red-800 text-white rounded p-3 text-center mb-5 font-bold uppercase'>
            <p>{mensaje}</p>
            {children}
        </div>
    )
}

export default Error