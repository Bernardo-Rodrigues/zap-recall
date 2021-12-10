import { useState } from "react";
import "./style.css"
import turn from "../../../assets/img/turn.png"
import SucessScreen from "../FinalScreen/SucessScreen";
import FailScreen from "../FinalScreen/FailScreen"
import FlashcardsArray from "../../../data/FlashcardsArray";



export default function FlashCard( { setTela } ){
    const [turnedCard,setTurnedCard] = useState(false)
    const [flashcard, setFlashcard] = useState(0)
    const [answer, setAnswer] = useState("")
    const [correct, setCorrect] = useState(true)

    
    function nextQuestion(){
        if(answer !== "" && answer !== "fourth-answer") setCorrect(false);
        setAnswer("")
        setTurnedCard(false)
        setFlashcard(flashcard + 1)
    }

    if(flashcard === FlashcardsArray.length) {
        console.log("oi")
        if(correct){
            setTela("sucess-screen")
            return <SucessScreen/>
        }else{
            setTela("fail-screen")
            return <FailScreen/>
        }
    }

    return(
        <>
            {turnedCard
                ?   
                    <div className={`flashcard turned ${answer}`}>
                        <div><h6>{FlashcardsArray[flashcard].title}</h6><span>{flashcard + 1}/{FlashcardsArray.length}</span></div>
                        <p>
                        {FlashcardsArray[flashcard].desc}
                        </p>
                        {answer !== ""
                            ?   <div className="img"><img src={turn} alt="Turn" onClick={nextQuestion}/></div>
                            :
                                <div className="buttons">
                                    <button className="b01" onClick={()=>setAnswer("first-answer")}>Aprendi agora</button>
                                    <button className="b02" onClick={()=>setAnswer("second-answer")}>Não lembrei</button>
                                    <button className="b03" onClick={()=>setAnswer("third-answer")}>Lembrei com esforço</button>
                                    <button className="b04" onClick={()=>setAnswer("fourth-answer")}>Zap!</button>
                                </div>
                        }
                        
                    </div>
                :
                    <div className="flashcard">
                        <span>{flashcard + 1}/{FlashcardsArray.length}</span>
                        <h2>{FlashcardsArray[flashcard].title}</h2>
                        <div className="img"><img src={turn} alt="Turn" onClick={()=>setTurnedCard(true)}/></div>
                    </div>
            }
                
        </>
    );
}