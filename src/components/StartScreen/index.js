import "./style.css"
import Deck from "../../data/FlashcardsArray";

import zapRecall from "../../assets/img/logo.png"
import next from "../../assets/img/next.png"
import { useState } from "react/cjs/react.development"

export default function FlashCards({ zapGoals, setZapGoals ,setTela}){
    const [placeholder, setPlaceholder] = useState("Sua meta de zaps" )

    function validateZapsGoal(){
        if(zapGoals < 1 ){
            setZapGoals("")
            setPlaceholder("A meta mínima é 1") 
        }else if(zapGoals > Deck.length ){
            setZapGoals("")
            setPlaceholder(`O deck só tem ${Deck.length} cartas`) 
        }else setTela("flashcards-screen")
    }
    return(
        <>
            <img src={zapRecall} alt="Zap recall"/>
            <div>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    onChange={ e => setZapGoals(e.target.value)}
                    value={zapGoals}
                />
                <div className="zaps">
                    <button onClick={validateZapsGoal} data-identifier="start-zap-recall">Praticar React<img src={next} alt="next"/></button>
                </div>
            </div> 
        </>
    );
}
