import React from 'react'
import notfound from './error.jpeg'

export default function NotFound() {
  return (
    <div>
        <h2>ERROR, Página no encontrada o inexistente </h2>
        <img 
            className="figure img img-fluid d-block"
            alt=""
            src={notfound}
        />
    </div>
  )
}
