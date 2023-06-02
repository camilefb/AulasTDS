import {useState} from 'react'

const ManageData = () => {
    //let valor = 10;
    //console.log(valor);

    const [valor, setValor] = useState(10);
    //console.log(valor);

    const [lista] = useState(["João", "Bia", "Joaquim"]);

    const [usuarios, setUsuarios] = useState([
        {id:0, nome:"Lucas", idade:51},
        {id:1, nome:"Dani", idade:30},
        {id:2, nome:"José", idade:22},
    ]);

    const handleDeletar = () => {
        const x = Math.floor(Math.random() * 3);
        console.log(x);
        setUsuarios( (prevUsers) => {
            return prevUsers.filter( (el) => el.id != x );
        })

    }


    return(
        <div>
            {/* {valor}
            <button onClick={()=> setValor(20)}>Altera valor</button> */}
            <ul>
            {
                lista.map( (el, i) => (
                    <li key={i}>{el}</li>
                ))
            }
            </ul>

            <ul>
            {
                usuarios.map( (el) => (
                    <li key={el.id}>{el.nome} - {el.idade}</li>
                ))
            }
            </ul>
            <button onClick={handleDeletar}>Clique aqui para deletar alguém</button>
        </div>
    );
    
}
export default ManageData;