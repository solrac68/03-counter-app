//FC
import React from 'react';

const PrimeraApp = () => {

    const saludo = 'Hola Mundo Const'
    const array = [1,2,3,4]
    const desarrollador = {
        nombre: 'Carlos',
        edad: 50,

    }
    return (
        <>
            <h1>{saludo}</h1>
            <h1>{array}</h1>
            <h1>{JSON.stringify(desarrollador)}</h1>
            <pre>{JSON.stringify(desarrollador, null, 3)}</pre>
            <p>Mi primera aplicacion</p>
        </>
    );
}

export default PrimeraApp;
