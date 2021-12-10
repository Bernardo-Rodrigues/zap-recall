import "../style.css"
import party from "../../../../assets/img/party.png"

export default function SucessScreen(){
    return (
        <>
            <h2>PARABÉNS!<img src={party} alt="party"/></h2>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}