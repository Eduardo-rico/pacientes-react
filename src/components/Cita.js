import React from 'react'
// import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'


function Cita({cita, eliminarCita}) {
    const {id, mascota, propietario, fecha, hora, sintomas} = cita; 
    return (
        <div className='cita'>
            <p>Mascota:<span>{mascota}</span></p>
            <p>Dueño:<span>{propietario}</span></p>
            <p>fecha:<span>{fecha}</span></p>
            <p>hora:<span>{hora}</span></p>
            <p>sintomas:<span>{sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={ () => eliminarCita(id)} //la funcion viene desde el app.js, tiene que ser arrowFunction para que no se llame sola
            >Eliminar &times;</button>
        </div>
    )
}



// Cita.propTypes = {
//     cita: PropTypes.object.isRequired,
//     eliminarCita: propTypes.func.isRequired
// }

export default Cita
