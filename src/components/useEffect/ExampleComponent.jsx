import { useEffect, useState } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    //cada vez que el estado cambie, quiero que se ejecute un efecto
    useEffect(() => {
        document.title = `Contador: ${count}`;
    },[count]); //dependencias, si el count cambia, se ejecuta el efecto

    return (
        <>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>
    )
}

export default ExampleComponent