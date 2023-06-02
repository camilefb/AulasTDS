// Seção de importação de estilos
import './App.css';

//Importação de imagens
import Infantil from "./assets/infantil.jpg"

// Seçãod e importação de componentes
import FirstComponent from "./components/FirstComponent"
import MyComponent from './components/MyComponent'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import PropsShowNames from './components/PropsShowNames'

import {useState} from 'react'

function App() {
  const nome2 = "Lucas";
  const [nome3] = useState("Joaquim");

  return (
    <div className="App">
        <h1 className="App">Título</h1>
        {/* Inserção primeiros componentes */}
        <FirstComponent/>
        <MyComponent/>

        {/* Inserção de imagens */}
        <img src="/infantil.jpg" alt="infantil" />
        <img src={Infantil} alt="infantil" />

        {/* Uso do Hoock useState */}
        <ManageData/>

        {/* Renderização condicional */}
        <ConditionalRender/>

        {/* Props */}
        {/* <PropsShowNames nome="Leticia"/> */}
        <PropsShowNames nome2={nome2} nome3={nome3}/>

    </div>
  );
}

export default App;
