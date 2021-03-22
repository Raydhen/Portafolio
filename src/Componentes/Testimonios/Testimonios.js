import React, {useState,useEffect} from 'react'
import '../Testimonios/Testimonios.css'
import foto1 from '../Imagenes/Persona1.jpg'
import foto2 from '../Imagenes/Persona2.jpg'
import foto3 from '../Imagenes/Persona3.jpg'
import foto4 from '../Imagenes/Persona4.jpg'
import {db} from '../../firebase'
const Testimonios = () => {
    const [testimonios, setTestimonios]=useState([])
        /*{
            imagen: foto1,
            titulo: "Astrid Rodriguez",
            contenido: "Maneja los problemas de forma serena, en situaciones extremas es decidido en sus objetivos"
        },
        {
            imagen: foto2,
            titulo: "Freddy Ricardo",
            contenido: "Siempre tratando de dar el 100%, nunca baja su nivel de esfuerzo en cada trabajo"
        },
        {
            imagen: foto3,
            titulo: "Pedro Hernandez",
            contenido: "Ofrecen los mejores cursos de capacitación en las siguientes plataformas: Youtube-Facebook-entre otras."
        },
        {
            imagen: foto4,
            titulo: "Marco Antonio",
            contenido: "Muy buen trabajo en quipo, de desenvuelven de manera eficiente"
        },
  
    ])*/
    useEffect(()=>{
        db.collection('Testimonios').onSnapshot(datos=>{
            const servis=[]
            datos.forEach(registro=>{
                console.log(registro.id,registro.data());
                servis.push({...registro.data(),id:registro.id});
            });
            setTestimonios(servis)
        })
    },[setTestimonios]);
    return (
        <div id="testimonios" class="Testi">
            <h2 class="titulo">Testimonios</h2>
            <div class="contenedor">
            <div class="cards">
            {testimonios.map(x=>
                <div class="card">
                <img src={`Imagenes/${x.imagen}`} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>{x.titulo}</b></h4>
                        <p>{x.contenido}</p>
                    </div>
                    
                </div>
                )}
            </div>
        </div>
        </div>
        )
    }
export default Testimonios