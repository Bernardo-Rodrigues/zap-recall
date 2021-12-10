import zapRecall from "../../assets/img/logo.png"
import next from "../../assets/img/next.png"
import "./style.css"

export default function FlashCards({setTela}){
    return(
        <>
            <img src={zapRecall} alt="Zap recall"/>
            <div className="zaps">
                <button onClick={()=>setTela("flashcards-screen")}>Praticar React<img src={next} alt="next"/></button>
            </div>
        </>
    );
}
