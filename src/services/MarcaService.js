import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de equipo
 */
const obtenerMarca = (estado = true) => {
    return axiosConfig.get('marca?estado=' + estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea tipo de equipo
 */
const crearMarca = (data) => {
    return axiosConfig.post('marca', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de equipo por ID
 */
const editarMarcaPorID = (marcaId, data) => {
    return axiosConfig.put('marca/' + marcaId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de equipo por ID
 */
const borrarMarcaPorID = (marcaId) => {
    return axiosConfig.delete('marca/' + marcaId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de equipo por ID
 */
const obtenerMarcaPorID = (marcaId) => {
    return axiosConfig.get('marca/' + marcaId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarca,
    crearMarca,
    editarMarcaPorID,
    borrarMarcaPorID,
    obtenerMarcaPorID
}