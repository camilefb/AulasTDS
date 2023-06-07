// const PropsShowNames = (props) => {
//     return (
//         <div>
//             {/* <p>Nome vindo do pai: {props.nome}</p> */}
//             <p>Nomes vindos do pai: {props.nome2}, {props.nome3}</p>
//         </div>
//     );
// }
// export default PropsShowNames


// Desestruturação de props com {}
const PropsShowNames = ({m, k, c}) => {
    return (
        <ul>
            <li>{m}</li>
            <li>{k}</li>
            <li>{c}</li>
        </ul>
    );
}
export default PropsShowNames