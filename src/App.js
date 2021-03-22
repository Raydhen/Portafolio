
import Acerca from './Componentes/Acerca/Acerca';
import Portada from './Componentes/Portada/Portada';
import Servicios from './Componentes/Servicios/Servicios';
import Portafolio from './Componentes/Portafolio/Portafolio'
import Testimonios from './Componentes/Testimonios/Testimonios'

import ContactoMejorsito from './Componentes/ContactoMejorsito/ContactoMejorsito';

function App() {
  return (
    <div className="App">
      <Portada/>
      <Acerca/>
      <Servicios></Servicios>
      <Portafolio/>
      <Testimonios/>
      <ContactoMejorsito/>

    </div>
  );
}
export default App;
