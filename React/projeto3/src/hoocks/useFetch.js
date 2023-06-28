//CUSTOM HOOCK "useFetch"

import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [produtos, setProdutos] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect( () => {
        async function buscaDados(){
            try{
                //Fazendo a requisição
                const res = await fetch(url);
                //Transformando de json para objetos
                const dados = await res.json();
                setProdutos(dados);
            }catch(erro){
                //Caso não seja possível conectar à API, erro é setado com a mesnagem
                setErro("Erro ao carregar os dados");
            }
        }
        buscaDados();
    },[url])

    //Custom hoock exporta 'produtos' e mensagem de 'erro'
    return {produtos, erro};
};