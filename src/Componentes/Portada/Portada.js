import React from 'react'
import './Portada.css'
import Header from '../Header/Header';
const Portada = () => {
    return (
        <div className="Portada">
            <Header></Header>
            <div className="Contenido">
                <h1>Marcos Terán</h1>
                <h2>Aspirante a programador en SQL y FRONTEND</h2>
                <a href="#contacto" class="btn btn-info">Contactame</a>
            </div>
        </div>
    )
}
export default Portada

