
const MyComponent = () => {
    const handleMyEvent = (e) =>{
        console.log("Ativou o evento");
        console.log(e);
    }
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando o titulo 1</h1>
        }
        else{
            return <h1>Renderizando o titulo 2</h1>
        }
    }

    return(
        <div>
            <h2>Estou sendo utilizada em varios componentes</h2>
            <button onClick={handleMyEvent}>Botão 1</button>
            <button onClick={() => console.log("Olá")}>Botão 2</button>
            {renderSomething(true)}
            {renderSomething(false)}

            

        </div>
    );
}
export default MyComponent;