const Children = ({children, nome}) => {
    return (
        <div>
            <h2>Título do componente-filho</h2>
            {children}
            <p>Outra prop sendo utilizada: {nome}</p>
        </div>
    );
}
export default Children;