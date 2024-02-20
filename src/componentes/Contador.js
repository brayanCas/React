import React, { useState } from 'react';
import '../estilos/Perfil.css';

export default function Contador(props) {
    const [number, setNumber] = useState(0);

    const aumentar = () => {
        setNumber(number + 1);
    }

    return (          
            <button className='btn-llamativo' onClick={aumentar}>{number} {props.children}</button>
    );
}
