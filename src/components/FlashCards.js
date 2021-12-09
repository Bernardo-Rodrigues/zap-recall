import { useState } from "react";
import logoMini from "../assets/logo-mini.png"
import turn from "../assets/turn.png"

export default function FlashCards({setAnswered }){
    const [turnedCard,setTurnedCard] = useState(false)

    return(
        <div className="flashcards-screen">
            <img src={logoMini} alt="Logo mini"/>
            <main>
                {turnedCard
                    ?   
                        <div className="flashcard turned">
                            <div><h6>Oque é JSX?</h6><span>1/8</span></div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.
                            </p>
                            <div className="buttons">
                                <button className="b01" onClick={()=>setAnswered(true)}>Aprendi agora</button>
                                <button className="b02" onClick={()=>setAnswered(true)}>Não lembrei</button>
                                <button className="b03" onClick={()=>setAnswered(true)}>Lembrei com esforço</button>
                                <button className="b04" onClick={()=>setAnswered(true)}>Zap!</button>
                            </div>
                        </div>
                    :
                        <div className="flashcard">
                            <span>1/8</span>
                            <h2>O que é JSX?</h2>
                            <div className="img"><img src={turn} alt="Turn" onClick={()=>setTurnedCard(true)}/></div>
                        </div>
                }
                
            </main>
        </div>
    );
}