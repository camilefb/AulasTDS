import styles from './Cars.module.css'

const Cars = ({propMarca, propKm, propCor}) =>{
    return (
        <div className={styles.carros}>
            <h1>{propMarca}</h1>
            <ul>
                <li>{propKm}</li>
                <li>{propCor}</li>
            </ul>
        </div>
    )
}
export default Cars;