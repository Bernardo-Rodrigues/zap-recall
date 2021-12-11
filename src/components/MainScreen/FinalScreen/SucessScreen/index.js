import "../style.css"

import party from "../../../../assets/img/party.png"
import next from "../../../../assets/img/next.png"

export default function SucessScreen( { setTela, setZapGoals } ){
    function restartZapRecall(){
        setZapGoals("")
        setTela("start-screen")
    }
    return (
        <>
            <h2>PARABÉNS!<img src={party} alt="party"/></h2>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <button onClick={restartZapRecall}>Tentar novamente <img src={next} alt="next" /></button>
        </>
    );
}