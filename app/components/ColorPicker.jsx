'use client'

import { useState } from "react";

export default function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const cambiaColore = (e) => {
        setColor(e.target.value);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-[30px] font-bold">Color Picker</h1>
                <div className="w-[300px] p-[30px] rounded-lg" style={{ backgroundColor: color }}>
                    <p style={color == "#000000" ? {color:"white"} : {color:"black"}}className="text-black" id="testo">Colore Selezionato: <span className="font-bold">{color}</span></p>
                </div>  {/* Ricorda nello style le prime parentesi sono per il codice JS e le seconde perche devi passare un oggetto che sarebbe il CSS*/}
                <input type="color" value={color} onChange={cambiaColore} />
            </div>
        </>
    );
}