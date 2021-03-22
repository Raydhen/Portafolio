import React from 'react'
import foto from '../Imagenes/—Pngtree—vector location icon_3781982.png'
import foto1 from '../Imagenes/icons8-whatsapp-64.png'
import './ContactoMejorsito.css'
import foto2 from '../Imagenes/pngwing.com.png'
import foto3 from '../Imagenes/pngwing2.com.png'
import foto4 from '../Imagenes/youtube-icon-394672.png'

const ContactoMejorsito = () => {
    return (
        <div className="ContenedorC">
            <div className="TituloC">
                <div className="Contacto"> 
                    <img src={foto}></img>
                    <h1>Contáctame</h1>
                </div>
                <p>Si piensas en algo imposible, dejará de ser imposible</p>
            </div>
            <div className="RedesSociales">
                <h1>Mis Redes Sociales</h1>
                <img src={foto1}></img>
                <img src={foto2}></img>
                <img src={foto3}></img>
                <img src={foto4}></img>
            </div>
            <div className="final">
                <div><a>© 2021 localhost:3000</a></div>
                <div className="texto">
                    <a>Privacy Policy</a>
                    <a>License</a>
                    <a>Contact Us</a>
                </div>
            </div>
            
        </div>
    )
}
export default ContactoMejorsito
/*243238*/