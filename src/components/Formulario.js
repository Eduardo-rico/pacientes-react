import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

function Formulario({crearCita}) {
    //se pasa la funcion del state principal a el formulario



    //crear state de citas y se ponen como atributos todos los nombres de los imputs, actualizarCita es lo que permite reescribit/escribir en el objeto cita
    // se usa onCHange en el input una funcion para actualizar el state y se pone como onChange = {laFuncion}
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //funcion que se ejecuta cuando el usuario escribe en un input y en 
    //Se le pasa un evento, es decir cada que cambia se le pasa lo que cambia
    //evento.target.name nos dice como se llama el name del input o .value nos da el valor
    const actualizarState = e => {
        actualizarCita({
            //...estado,
            ///[para cada nombre del evento de cada evento]: el valor del evento
            ...cita,
            [e.target.name]: e.target.value 
            //leemos lo que pone el usuario y lo ponemos en el estado
        })
    }


    //generamos otro estate para los errores 
    const [error, actualizarError] = useState(false) 

    //extraer los valores del state llamado cita para despues formatearlo cuando ya enviemos el formulario
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    //cuando el usuario presiona agregar vita
    const submitCita = e => {
        e.preventDefault(); //porque por defecto lo manda en la url por metodo GET, para evitar eso
        //aqui van las acciones cuando enviamos citas

        //validamos antes de enviarlo a la base de datos.
        //trim() elimina los espacios vacios al inicio o final
        if(mascota.trim() === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            //se tiene que retornar algo para evitar que siga la ejecucion
            console.log('Hay un error, tienes que agregar todos los ddatos');
            actualizarError(true) // si hay un error, ahora el state Error es true
            return; 
        }

        //eliminar el mensaje previo de error para evitar que aparezca en el form
        actualizarError(false)

        //asignamos un ID si pasamos la validacion anterior
        //instalamos una libreria para que nos haga un id unico llamado uuid y hay otra que se llama shortid
        cita.id = uuid()
        console.log(cita);



        //creamos la cita
        crearCita(cita)

        //para crear la cita necesitamos un state pricncipal en el app
        //reiniciamos el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

        
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre mascota</label>
                <input 
                    type = 'text'
                    name = 'mascota'
                    className = 'u-full-width'
                    placeholder = 'nombre de la mascota'
                    onChange = {actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type = 'text'
                    name = 'propietario'
                    className = 'u-full-width'
                    placeholder = 'nombre del dueño'
                    onChange = {actualizarState}
                    value={propietario}
                />
                <label>Fecha de la cita</label>
                <input 
                    type = 'date'
                    name = 'fecha'
                    className = 'u-full-width'
                    onChange = {actualizarState}
                    value={fecha}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type = 'time'
                    name = 'hora'
                    className = 'u-full-width'
                    onChange = {actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className = 'u-full-width'
                    name = 'sintomas'
                    onChange = {actualizarState}
                    value={sintomas}
                >
                </textarea>
                <button
                    type='submit'
                    className = 'u-full-width button-primary'
                >Agregar cita</button>

            </form>
        </Fragment>
    )
}


Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
