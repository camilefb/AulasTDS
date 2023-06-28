import {useState} from 'react'

const MyForm = () =>{

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const handleNome = (e) =>{
        //console.log(e.target.value);
        setNome(e.target.value);
    }
    // const handleEmail = (e) =>{
    //     //console.log(e.target.value);
    //     setEmail(e.target.value);
    // }
    //console.log(nome, email);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome, email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Nome: </span>
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="Digite aqui seu nome"
                        onChange={handleNome}
                    />
                </label>
                <label>
                    <span>E-mail: </span>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite aqui seu email"
                    onChange={ (el) => setEmail(el.target.value) }
                    />
                </label>
                <input type="submit" value="Enviar"/>
            </div>


        </form>
    );
}
export default MyForm;