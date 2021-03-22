import React,{useState} from 'react'
import './Acerca.css'
import Foto1 from '../Imagenes/4.png'
import Foto2 from '../Imagenes/3.png'
const Acerca = () => {
    const [foto,setFoto]= useState(Foto1);
    const [bandera,setBandera]=useState(true);

    const cambiarFoto=()=>{
        if (bandera){
            setFoto(Foto2)
            setBandera(false)
        }
        else{
            setFoto(Foto1)
            setBandera(true)
        }
    }
    
    return (
    <div className="Second" id="acerca">
        <img onClick={()=>cambiarFoto()}
        src={foto} alt=""></img>
        <h2 class="texto">Mi nombre es Marcos Terán</h2>
        <p class="texto">Soy estudiante de la UNEMI, cursando 5to semestre de ingeniería en software</p>
        <a href="#Nav1">Contacto</a>
    </div>
    )
}
export default Acerca
