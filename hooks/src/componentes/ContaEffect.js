import React, {useState , useEffect} from 'react';

export default function Efecto(){
    const [stateCar, setStateCar] = useState(false);
    const [contar, setContar] = useState(0);

    useEffect(() => {
        console.log("Total: " + contar)
    }, [contar])

    const encenderApagar = () => {
        setStateCar(preValue => !preValue);
        setContar(contar + 1);
    };

    return (
        <div>
            <h3>El coche esta: {stateCar ? "encendido" : "apagado"}</h3>
            <h4>Clicks: {contar}</h4>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </div>
    )
}
