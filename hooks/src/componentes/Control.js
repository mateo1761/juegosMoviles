import React, {useState} from 'react';

function Control() {
    const [stateCar, setStateCar] = useState(false);

    const encenderApagar = () => {
        setStateCar(preValue => !preValue);
    };

    return (
        <div>
            <h3>El coche esta: {stateCar ? "encendido" : "apagado"}</h3>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </div>
    )

}

export default Control;