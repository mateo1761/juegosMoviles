import React, {useState} from "react";
import apagado from "../img/apagado.jpg"
import encendido from "../img/encendido.jpg"

function Bombillo(){

    const [state, setStatus] = useState(apagado);
    const [count, setCount] = useState(0);

    const encender = () => {
        setStatus(encendido);
        setCount(count + 1);
    }

    const apagar = () => {
        setStatus(apagado);
    }

    return(
        <div>
            <img src={state}></img>
            <span>Accion</span>
            <button onClick={encender}>Encender</button>
            <button onClick={apagar}>Apagar</button>
            <br/>
            <span>Cantidad de veces que se ha encendido: {count}</span>
        </div>
    )
}

export default Bombillo;