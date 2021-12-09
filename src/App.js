import { useState } from "react";
import Flashcards from "./components/FlashCards";
import StartScreen from "./components/StartScreen"
import SucessScreen from "./components/SucessSreen";
import FailScreen from "./components/FailScreen";





export default function App(){
    const [tela,setTela] = useState(1) 
    const [answered, setAnswered] = useState(false)
    if(answered === true) setTimeout(()=>setTela(3),1000)

    return(
        <>
        {tela === 1 
            ? <StartScreen setTela={setTela}/>    
            : tela === 2
                ? <Flashcards setAnswered={setAnswered}/>
                : tela === 3
                    ? <SucessScreen/>
                    : <FailScreen/>
        }
        </>
    );
}   