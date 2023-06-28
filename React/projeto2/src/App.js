import './App.css';
import MyComponent from './components/MyComponent';
import Cars from './components/Cars'
import MyForm from './components/MyForm';

function App() {

  const carros = [
    {id:1, marca:"Fiat", km:0, cor:"branco"},
    {id:2, marca:"Renault", km:500, cor:"preto"},
    {id:3, marca:"VW", km:6500, cor:"azul"},
  ];


  return (
    <div className="App">
        <h1>Titulo do pai</h1>
        <MyComponent/>

        <h1>Mostra carros</h1>
        <div className='car-container'>
            {
              carros.map( (el) =>(
                <Cars key={el.id}
                propMarca={el.marca}
                propKm={el.km}
                propCor={el.cor}
                />
              ))
            }
        </div>

        {/* Formulários */}
        <MyForm/>

    </div>
  );
}

export default App;
