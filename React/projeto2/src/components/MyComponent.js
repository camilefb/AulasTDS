import './MyComponent.css';
import {useState} from 'react'
import styles from './MyComponent.module.css'


const MyComponent = () => {
    const [nome] = useState("João");
    const flag = false;

    return (
        <div>
            <h1>Titulo do filho</h1>
            <p>Paraagro do componente filho</p>
            <h1 className="classeTit">Segundo titulo</h1>

            <h2 style={nome === "João"? (
                {color:"yellow"}
            ): (
                {color:"blue"}
            )
            }> CSS dinâmico </h2>

            <h2 className={flag ? ("redTitle") : ("blueTitle")}>Terceiro título</h2>

            <h2 className={styles.minhaClasse}>Quarto titulo</h2>
        </div>
    )
}
export default MyComponent;