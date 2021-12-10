import { useState } from "react";

import StartScreen from "./components/StartScreen"
import MainScreen from "./components/MainScreen";
import Flashcard from "./components/MainScreen/FlashCardsScreen";
import SucessScreen from "./components/MainScreen/FinalScreen/SucessScreen";
import FailScreen from "./components/MainScreen/FinalScreen/FailScreen";



export default function App(){
    const [tela,setTela] = useState("start-screen") 

    return(
            <div className={tela}>
                {tela === "start-screen" 
                    ?   <StartScreen setTela={setTela}/>  
                    :   <MainScreen>
                            {tela === "flashcards-screen"
                                ?   <Flashcard setTela={setTela}/>
                                :   tela === "sucess-screen"
                                        ?   <SucessScreen/>
                                        :   <FailScreen/>
                            }
                        </MainScreen>
                }
            </div>
    );
}   