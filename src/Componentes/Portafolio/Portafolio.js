import React,{useState,useEffect} from 'react'
import './Portafolio.css'
import foto7 from '../Imagenes/aperture.svg'
import {db} from '../../firebase'
const Portafolio = () => {
    const [portafolio, setPortafolio]=useState([])

    useEffect(()=>{
        db.collection('Portafolio').onSnapshot(datos=>{
            const servis=[]
            datos.forEach(registro=>{
                console.log(registro.id,registro.data());
                servis.push({...registro.data(),id:registro.id});
            });
            setPortafolio(servis)
        })
    },[setPortafolio]);

    return (
        <section id="portafolio" class="Proyecto"> 
        <h2 class="titulop">Proyectos realizados</h2>
         <div class="contenedorp">
                <div class="galeria-pro">
                    {portafolio.map(x=>
                        <div className="imagen-pro">
                            <img src={`Imagenes/${x.imagen}`} alt=""></img>
                            <div class="hover-galeria">
                                <img src = {foto7} alt="icono"></img>
                            </div>
                        </div>
                        )}
                </div>
            </div>
            </section>
            
    )
}
export default Portafolio