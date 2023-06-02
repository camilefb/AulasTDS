const FirstComponent = () => {
    const nome = "Camile";
    const a=10;
    const b=20;

    // Objeto literal
    const pessoa = {
        idade: 26,
        job: "programador",
    }
    
    return (
        <div>
            <h1 className="titulo">Olá {nome}</h1>
            <p>Sua função é {pessoa.job}</p>
            <p>{a + b}</p>
        </div>
    );
}
export default FirstComponent;