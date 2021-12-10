import logoMini from "../../assets/img/logo-mini.png"
import "./style.css"

export default function MainScreen( { children } ){
    return(
        <>
            <img src={logoMini} alt="Logo mini"/>
            <main>
                {children}
            </main>
        </>
    );
}