import "../style.css"
import sad from "../../../../assets/img/sad.png"

export default function FailScreen(){
    return (
        <>
            <h2>Putz..<img src={sad} alt="sad"/></h2>
            <p>Você esqueceu alguns flashcards..<br/> Não desanime! Na próxima você consegue!</p>
        </>
    );
}