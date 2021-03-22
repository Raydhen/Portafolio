import React,{useState,useEffect} from 'react'
import './Servicios.css'
import foto1 from '../Imagenes/3.png'
import foto2 from '../Imagenes/4.png'
import foto3 from '../Imagenes/UNEMI-logo.jpg'
import {db} from '../../firebase'

const Servicios = () => {
    /* const [servicios, setServicios]=useState([
        {
            imagen: foto1,
            titulo: "Analisis y Diseño",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        {
            imagen: foto2,
            titulo: "Desarrollo web",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        {
            imagen: foto3,
            titulo: "Cursos de Capacitación",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        {
            imagen: foto3,
            titulo: "Cursos de Capacitación",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        }
        
    ]) */
    const [servicios, setServicios]=useState([])

    useEffect(()=>{
        db.collection('Servicios').onSnapshot(datos=>{
            const servis=[]
            datos.forEach(registro=>{
                console.log(registro.id,registro.data());
                servis.push({...registro.data(),id:registro.id});
            });
            setServicios(servis)
        })
    },[setServicios]);

    return (
        <div id="servicios" className="Servicios">
            <div className="opacity"></div>
            <h1 className="title">Servicios</h1>
            <div className="dserv1">
                {servicios.map(servicio=>
                    <div className="divuno">
                        <img src={`Imagenes/${servicio.imagen}`} alt=""></img>
                        <h3 className="tarjeta-titulo">{servicio.titulo}</h3>
                        <p className="tarjeta-parrafo">{servicio.contenido}</p>
                    </div>
                    )}
            </div>
        </div>
    )
}
export default Servicios