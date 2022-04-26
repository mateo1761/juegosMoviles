import React from 'react';
import Contador from './componentes/Contador';
import Control from './componentes/Control'
import Efecto from './componentes/ContaEffect'
import Nosotros from './componentes/Nosotros';

function App() {
  return (
    <div>
      <h1>Hola mundo en react</h1>
      <Contador/>
      <Control/>
      <Efecto/>
      <Nosotros/>
    </div>
  );
}

export default App;
