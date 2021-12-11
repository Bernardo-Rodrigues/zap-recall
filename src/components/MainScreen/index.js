import "./style.css"

import logoMini from "../../assets/img/logo-mini.png"

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