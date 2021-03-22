
import React,{useState} from 'react'
import './Header.css';
import {Link} from "wouter";
import hamburguesa from "../Imagenes/hamburguesa.png"
import flecha from '../Imagenes/flechita.png'
const Header = () => {
    const [foto,setFoto]= useState(hamburguesa);
    const [bandera,setBandera]=useState(true);

    const cambiarFoto=()=>{
        if (bandera){
            setFoto(flecha)
            setBandera(false)
        }
        else{
            setFoto(hamburguesa)
            setBandera(true)
        }
    }

    return (
        <div className="divheader" id="inicio">
            <nav className="hamburguesas">
                <input type="checkbox" id="menu"></input>
                <label for="menu"><img onClick={()=>cambiarFoto()} src={foto}></img></label>
                <ul>
                    <a href="/">INICIO</a>
                    <a href="#acerca">ACERCA</a>
                    <a href="#servicios">SERVICIOS</a>
                    <a href="#portafolio">PORTAFOLIO</a>
                    <a href="#testimonios">TESTIMONIOS</a>
                    <a href="#contacto">CONTACTO</a>
                    <a href="/configuracion">CONFIGURACION</a>
                </ul>
            </nav>
            <header>
                <a href="/">INICIO</a>
                <a href="#acerca">ACERCA</a>
                <a href="#servicios">SERVICIOS</a>
                <a href="#portafolio">PORTAFOLIO</a>
                <a href="#testimonios">TESTIMONIOS</a>
                <a href="#contacto">CONTACTO</a>
                <a href="/configuracion" className="btnconf">CONFIGURACION</a>
            </header>
        </div>
    )
}
export default Header