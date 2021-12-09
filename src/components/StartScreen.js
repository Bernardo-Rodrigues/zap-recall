import zapRecall from "../assets/logo.png"
import next from "../assets/next.png"

export default function FlashCards({setTela}){
    return(
        <div className="start-screen">
        <img src={zapRecall} alt="Zap recall"/>
        <div className="zaps">
            <button onClick={()=>setTela(2)}>Praticar React<img src={next} alt="next"/></button>
        </div>
    </div>
    );
}
