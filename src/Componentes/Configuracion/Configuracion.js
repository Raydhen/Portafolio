import React,{useState} from 'react'
import './Configuracion.css';
import Imagen from '../Imagenes/de68b20576f22680b9097b8555f3ce5fe6f57537_hq.gif'
const Configuracion = () => {
    return (
        <div className="Configuracion">
            <div className="divheader2" id="inicio">
            <header>
                <a href="/">VOLVER</a>
            </header>
            <div className="Contenido2">
                <h2>Configuración del Sitio</h2>
                <h3>Acceso exclusivo del Administrador</h3>
                <img src={Imagen}></img>
            </div>
        </div>
        </div>
    )
}
export default Configuracion