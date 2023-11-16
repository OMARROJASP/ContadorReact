import {useCounter} from "../hooks/useCounter.js";

export const ContadorComponent = () => {

       const {contador, incrementar, decrementar,resetear} = useCounter(0)



    return(
        <>
            <h1>Contador: {contador}</h1>
            <button className="btn btn-primary" onClick={ () => incrementar()}>Aumentar</button>
            <button className="btn btn-danger" onClick={ () => resetear()}>Restaurar</button>
            <button className="btn btn-primary" onClick={ () => decrementar()}>Disminuir</button>
        </>
    )
}