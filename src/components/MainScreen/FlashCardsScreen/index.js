import { useState } from "react";
import "./style.css"

import turn from "../../../assets/img/turn.png"
import Deck from "../../../data/FlashcardsArray";

export default function FlashCard( { setTela } ){
    const [turnedCard,setTurnedCard] = useState("")
    const [flashcard, setFlashcard] = useState(0)
    const [answer, setAnswer] = useState("")
    const [correct, setCorrect] = useState(true)
    let lastCorrect = true;

    function nextQuestion(){
        if(answer !== "" && answer !== "fourth-answer") {
            setCorrect(false);
            lastCorrect = false;
        }
        setAnswer("")
        setTurnedCard("")
        if(flashcard + 1 === Deck.length) {
            if(correct && lastCorrect){
                setTela("sucess-screen")
            }else{
                setTela("fail-screen")
            }
        }  
        setFlashcard(flashcard + 1)
    }

    return(
        <div className={`flashcard ${turnedCard} ${answer}`} data-identifier="flashcard">
            {turnedCard
                ?
                    <>
                        <div><h6>{Deck[flashcard].title}</h6><span data-identifier="counter">{flashcard + 1}/{Deck.length}</span></div>
                        <p>{Deck[flashcard].answer}</p>
                        {answer !== ""
                            ?   <div className="img" data-identifier="arrow"><img src={turn} alt="Turn" onClick={nextQuestion}/></div>
                            :
                                <div className="buttons">
                                    <button className="b01" onClick={()=>setAnswer("first-answer")}>Aprendi agora</button>
                                    <button className="b02" onClick={()=>setAnswer("second-answer")}>Não lembrei</button>
                                    <button className="b03" onClick={()=>setAnswer("third-answer")}>Lembrei com esforço</button>
                                    <button className="b04" onClick={()=>setAnswer("fourth-answer")}>Zap!</button>
                                </div>
                        } 
                    </>
                :   
                    <>
                        <span data-identifier="counter">{flashcard + 1}/{Deck.length}</span>
                        <h2>{Deck[flashcard].title}</h2>
                        <div className="img" data-identifier="arrow"><img src={turn} alt="Turn" onClick={()=>setTurnedCard("turned")}/></div>
                    </>
            }
            
        </div>
    );
}