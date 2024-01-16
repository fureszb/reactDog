import Mondat from "./mondat";
import React, { useState } from 'react';

export default function Kiegeszit(props){
    const [inputValue, setInputValue] = useState('');
    const [valasz, setValasz] = useState(null);
    const [pontok, setPontok] = useState(0);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function ellenoriz() {
        if(inputValue === props.model.getList()[props.model.getAktIndex()].valasztas[0]) {
            setValasz('helyes');
            setPontok(pontok + 1);
            props.model.kovMondat();
        } else {
            setValasz('hibas');
        }
        setInputValue(''); 
    }

    return(
        <div>
            <h3>{props.model.getcim()}</h3>
            <Mondat 
                elsoResz={props.model.aktMondatFeldarabol()[0]} 
                masodikResz={props.model.aktMondatFeldarabol()[1]} 
                zarojel={props.model.getZarojel()} 
                onInputChange={handleInputChange} 
            />
            {valasz === 'helyes' && <span className="helyes">✅</span>}
            {valasz === 'hibas' && <span className="hibas">❌</span>}
            <span>Pontjaid: {pontok}</span>
            {valasz !== 'helyes' && (
                <button type="button" className="btn btn-primary" onClick={ellenoriz}>Következő mondat</button>
            )}
            {valasz === 'helyes' && (
                <button type="button" className="btn btn-primary" onClick={ellenoriz}>Következő mondat</button>
            )}
        </div>
    )
}

