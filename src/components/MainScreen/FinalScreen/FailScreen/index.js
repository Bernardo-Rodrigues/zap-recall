import "../style.css"

import sad from "../../../../assets/img/sad.png"
import next from "../../../../assets/img/next.png"

export default function FailScreen( {setTela, setZapGoals}){
    function restartZapRecall(){
        setZapGoals("")
        setTela("start-screen")
    }
    return (
        <>
            <h2>Putz..<img src={sad} alt="sad"/></h2>
            <p>Você esqueceu alguns flashcards..<br/> Não desanime! Na próxima você consegue!</p>
            <button onClick={restartZapRecall}>Tentar novamente <img src={next} alt="next" /></button>
        </>
    );
}