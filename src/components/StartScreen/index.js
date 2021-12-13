import { useState } from "react"
import "./style.css"

import zapRecall from "../../assets/img/logo.png"
import next from "../../assets/img/next.png"
import Decks from "../../data/FlashcardsArray"

export default function FlashCards({ setDeck,zapGoals, setZapGoals ,setTela}){
    const [placeholder, setPlaceholder] = useState("Sua meta de zaps" )

    function validateZapsGoal(indice){
        if(zapGoals < 1 ){
            setZapGoals("")
            setPlaceholder("A meta mínima é 1") 
        }else if(zapGoals > Decks[indice].questions.length ){
            setZapGoals("")
            setPlaceholder(`O deck só tem ${Decks[indice].questions.length} cartas`) 
        }else {
            console.log(indice)
            setDeck(indice)
            setTela("flashcards-screen")
        }
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
                    {Decks.map(((deck, indice) =>
                        <button onClick={()=>validateZapsGoal(indice)} data-identifier="start-zap-recall">Praticar {deck.name}<img src={next} alt="next"/></button>
                    ))}
                </div>
            </div> 
        </>
    );
}
