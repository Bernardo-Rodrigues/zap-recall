import logoMini from "../assets/logo-mini.png"
import party from "../assets/party.png"

export default function SucessScreen(){
    return (
        <div className="fail-screen">
            <img src={logoMini} alt="Logo mini"/>
            <main>
                <h2>PARABÉNS!<img src={party} alt="party"/></h2>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </main>
        </div>
    );
}