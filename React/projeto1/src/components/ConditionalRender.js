import {useState} from 'react'

const ConditionalRender = () => {
    //const [flag] = useState(true);
    const [nome, setNome] = useState("Maria");

    return(
        <div>
            {/* {flag && <p>Olá, flag está em true</p>}
            {!flag && <p>Flag está em falso</p>} */}

            {/* Renderização condicional por if-ternário */}
            {
                nome === "Maria" ? (
                    <div>
                        Usuário logado
                    </div>
                ) : (
                    <div>
                        Usuário não encontrado
                    </div>
                )
            }
            <button onClick={() => setNome("Paula")}>Clique para mudar o nome</button>
        </div>
    );
}
export default ConditionalRender;