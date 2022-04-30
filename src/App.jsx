import { useEffect, useState } from 'react';
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"

function App() {

  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(pacientesLS)
  const [paciente, setPaciente] = useState({})

  // Local Storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    console.log('Eliminando paciente', id)
    setPacientes(pacientes.filter( p => p.id !== id))
  }

  // const print2mas2 = () => {
  //   console.log(2 + 2)
  // }

  // const tomaValor = (valor) => {
  //   console.log(valor)
  // }

  return (
    <div className="container mx-auto mt-20">
      {/* <Header numeros={1} isAdmin={false} fn={print2mas2} tomaValor={tomaValor} />     */}
      <Header />    
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes} />
        <ListadoPacientes 
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes} 
          setPaciente={setPaciente} />
        </div> 
    </div>
  )
}

export default App