import React,{ Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  //citas en local Storage, solo almacena strings
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }
  
  
  
  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales) //se cambia de [] a citasIniciales para cargar lo que esta en local storage


  //useEffect se usa para realizar operaciones cuando el state cambia, simepre es un arrowFunction
    //Se usa cuando el componente esta listo o cuando hay cambios en el componente useEffect( ()=>{}, [state] ) para evitar que se vuelva a ejecutar
    // o que solo se ejecute una vez, se le pasa un array vacio despues del arrowFunction (se le pasa el state para que este al pendiente de el cambio de èste)
    //Lo usaremos para guardar citas en el localstorage
    //se llaman dependencias al arreglo de states dentro del useEffect(arrow, [dependencias])

  useEffect(() => {
    console.log('Se uso useEffect')
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas, citasIniciales])
  
  //funcion que tome las citas actuales y tome la nueva
  const crearCita = cita => {
    console.log('creando cita') //se pasa al formulario
    guardarCitas([ ...citas, cita])
  }
  
  const eliminarCita = id =>{
    console.log('eliminar cita', id);
    //nuevo arreglo
    const nuevasCitas = citas.filter(cita => cita.id !== id); //el citas.filter...... es el estado y para quitar el que yo quiero tiene que ser todos los que sean diferentes
    guardarCitas(nuevasCitas) //porque nuevasCitas ya es un arreglo, y volvemos a modificar el state
  }

  //mensaje condicional para mostrar un titluo dependiendo si hay o no citas
  console.log(citas.length)
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='conatainer'>
          <div className='row'>
            <div className='one-half column'>
              <Formulario 
                crearCita={crearCita}
              />
            </div>
            <div className='one-half column'>
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita}/>
              ))}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;


//los propTypes es una forma de mantener documentada los componentes, para el proximo que le de una actualizacion