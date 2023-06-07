const UserDetails = ({propNome, propIdade, propJob}) => {
    return (
        <div>
            <ul>
                <li>{propNome} - {propIdade} - {propJob}</li>
            </ul>
            {
                propIdade >=18 ? (
                    <p>{propNome} já pode tirar carteira</p>
                ) : (
                    <p>{propNome} não pode tirar carteira ainda</p>
                )
            }
        </div>
    );
}
export default UserDetails;