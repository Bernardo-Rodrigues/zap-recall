import { useState } from "react";

import StartScreen from "./components/StartScreen"
import MainScreen from "./components/MainScreen";
import Flashcard from "./components/MainScreen/FlashCardsScreen";
import SucessScreen from "./components/MainScreen/FinalScreen/SucessScreen";
import FailScreen from "./components/MainScreen/FinalScreen/FailScreen";



export default function App(){
    const [tela,setTela] = useState("start-screen") 
    const [zapGoals, setZapGoals] = useState("")

    return(
            <div className={tela}>
                {tela === "start-screen" 
                    ?   <StartScreen zapGoals={zapGoals} setZapGoals={setZapGoals} setTela={setTela}/>  
                    :   <MainScreen>
                            {tela === "flashcards-screen"
                                ?   <Flashcard zapGoals={zapGoals} setTela={setTela}/>
                                :   tela === "sucess-screen"
                                        ?   <SucessScreen setTela={setTela} setZapGoals={setZapGoals}/>
                                        :   <FailScreen/>
                            }
                        </MainScreen>
                }
            </div>
    );
}   