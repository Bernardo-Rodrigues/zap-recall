import { useState } from "react";
import "./style.css"

import turn from "../../../assets/img/turn.png"
import Decks from "../../../data/FlashcardsArray";

export default function FlashCard( { deck, zapGoals ,setTela } ){
    const [turnedCard,setTurnedCard] = useState("")
    const [flashcard, setFlashcard] = useState(0)
    const [answer, setAnswer] = useState("")
    const [correct, setCorrect] = useState(true)
    const [zapAnswers, setZapAnswers] = useState(0)
    let lastCorrect = true;
    let lastZapAnswers = zapAnswers
    deck = Decks[deck];

    function nextQuestion(){
        if(answer !== "" && answer !== "fourth-answer") {
            setCorrect(false);
            lastCorrect = false;
        }else if(answer === "fourth-answer"){
            setZapAnswers(zapAnswers + 1)
            lastZapAnswers++;
        } 

        setAnswer("")
        setTurnedCard("")

        if(flashcard + 1 === deck.questions.length) {
            if((correct && lastCorrect) || (lastZapAnswers >= zapGoals)){
                setTela("sucess-screen")
            }else{
                setTela("fail-screen")
            }
        }  
        setFlashcard(flashcard + 1)
    }

    return(
        <>
            <h2>{deck.name}</h2>
            <div className={`flashcard ${turnedCard} ${answer}`} data-identifier="flashcard">
                {turnedCard
                    ?
                        <>
                            <div><h6>{deck.questions[flashcard].title}</h6><span data-identifier="counter">{flashcard + 1}/{deck.questions.length}</span></div>
                            <p>{deck.questions[flashcard].answer}</p>
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
                            <span data-identifier="counter">{flashcard + 1}/{deck.questions.length}</span>
                            <h2>{deck.questions[flashcard].title}</h2>
                            <div className="img" data-identifier="arrow"><img src={turn} alt="Turn" onClick={()=>setTurnedCard("turned")}/></div>
                        </>
                }
                
            </div>
        </>
    );
}