import './App.css';
import {useState, useEffect} from 'react'
import {useFetch} from './hoocks/useFetch'

//API
const url = "http://localhost:3000/produtos/";

function App() {
  //Ao invés de cada componente realizar toda vez a requisição abaixo, criamos um
  //custom hoock responsável por isso, chamado 'useFetch'

  // 1- Resgatando dados: 
  // const [produtos, setProdutos] = useState([]);
  // useEffect( ()=>{
  //   async function buscaDados(){

  //     //1-Fazendo a requisição
  //     const res = await fetch(url);
  //     //2-Transformando a resposta de json em objeto
  //     const dados = await res.json();

  //     setProdutos(dados);
  //   }
  
  //   buscaDados();
  // },[produtos]);



  //Utilizando o custom hoock 'useFetch'
  const {produtos, erro} = useFetch(url);



  //2- Adicionando dados
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const prods = {
      nome,
      preco,
    }

    // Requisição do tipo POST
    const res = await fetch(url, {
        //Propriedade method para indicar que é um POST
        method: "POST",
        //Cabeçalho da requisição, para informar que tipo de conteúdo está sendo manipulado
        headers:{
          "Content-Type": "application/json"
        },
        //Corpo da requisição: para que o dado seja transmitido como json
        body: JSON.stringify(prods),
    });

    const novoProd = await res.json();

    // Carregando dados dinâmicamente
    // setProdutos( (prevProdutos) => [...prevProdutos, novoProd]);

    // setNome("");
    // setPreco("");
  }



  return (
    <div className="App">
        <h1>Listar produtos</h1>
        {/* O parágrafo só é mostrado se retornou algo em 'erro' */}
        {erro && <p>{erro}</p>}

        {/* 1 - Resgatar os dados - GET*/}
        <ul>
          {
            // if para só mostrar a lista de produtos caso já exista algum (não é null)
            produtos && produtos.map((el)=>(
              <li key={el.id}>
                {el.nome} - {el.preco}
              </li>
            ))
          }
        </ul>

        {/* 2 - Adicionando os dados à API - POST*/}
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={nome} name='nome' 
            onChange={(e) => setNome(e.target.value)}/>
          </label>

          <label>
            Preço:
            <input type="number" value={preco} name='preco' 
            onChange={(e) => setPreco(e.target.value)}/>
          </label>

          <input type="submit" value="Enviar"/>
        </form>


    </div>
  );
}

export default App;
