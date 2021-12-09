import logoMini from "../assets/logo-mini.png"
import sad from "../assets/sad.png"

export default function FailScreen(){
    return (
        <div className="fail-screen">
            <img src={logoMini} alt="Logo mini"/>
            <main>
                <h2>Putz..<img src={sad} alt="sad"/></h2>
                <p>Você esqueceu alguns flashcards..<br/> Não desanime! Na próxima você consegue!</p>
            </main>
        </div>
    );
}