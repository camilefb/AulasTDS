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
import Children from './components/Children'
import ExecuteFunction from './components/ExecuteFunction'
import UserDetails from './components/UserDetails'


function App() {
  // const nome2 = "Lucas";
  // const [nome3] = useState("Joaquim");

  const carros = [
    {id:1, marca:"Fiat", km:0, cor:"branco"},
    {id:2, marca:"Kia", km:5000, cor:"preto"},
    {id:3, marca:"Renault", km:0, cor:"azul"},
  ];

  function mostraMessage(){
    console.log("Evento vindo do pai");
  }

  const pessoas = [
    {id:1, nome:"Lucas", idade:20, job:"dentista"},
    {id:2, nome:"Ana", idade:22, job:"enfermeira"},
    {id:3, nome:"Paulo", idade:34, job:"médico"},
    {id:4, nome:"Maria", idade:51, job:"advogada"},
  ];


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
        {/* <PropsShowNames nome="João" job="programador" idade={20}/> */}
        {
          carros.map( (el) => (
            <PropsShowNames key={el.id}
              m={el.marca}
              k={el.km}
              c={el.cor}
            />
          ))
        }
        
        {/* Children props */}
        <Children nome="José">
          <p>Parágrafo do pai</p>
        </Children>


        {/* Props com funções */}
        <ExecuteFunction propFuncao={mostraMessage}/>


        {/* Exercício final */}
        {
          pessoas.map( (el)=> (
              <UserDetails key={el.id}
                 propNome={el.nome}
                 propIdade={el.idade}
                 propJob={el.job}
              />
          ))
        }

    </div>
  );
}

export default App;
