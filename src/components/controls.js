import '../styles/controls.css';
import React, { useState } from 'react';

export const Controls = (props) => {
    const [alphaColor, setAlpha] = useState('0')
    const [betaColor, setBeta] = useState('0')
    const [kappaColor, setKappa] = useState('0')
    const [charxColor, setCharColor] = useState('')
    
    
    const buttons = [
        { desc: "play", action : ''},
        { desc: "character", action : ''}
    ]
    const modalContainer = () => {
        return (
            <div className="modalContainer" id="modalContainer" style={{backdropFilter : 'none'}}>
                <div className="modal__char modal__inside">
                    <h1>Pick your color!</h1>
                    <div id="preview" style={{backgroundColor: `rgb(${alphaColor},${betaColor},${kappaColor})`}}>rgba({alphaColor}, {betaColor}, {kappaColor}) </div>
                    <input type="range" id="alpha" name="alpha" min="0" max="255" onChange={(event) => {
                        console.log(); setAlpha(event.target.value)
                    }}/>
                    <input type="range" id="beta" name="beta" min="0" max="255" onChange={(event) => {
                        console.log(); setBeta(event.target.value)
                    }}/>
                    <input type="range" id="kappa" name="kappa" min="0" max="255" onChange={(event) => {
                        console.log(); setKappa(event.target.value)
                    }}/>
                    <button onClick={() => {
                        let finalColor = `rgb(${alphaColor},${betaColor},${kappaColor})`;
                        // console.log(finalColor)
                        setCharColor("" + finalColor)
                        document.getElementById("modalContainer").classList.remove("show");
                        console.log(charxColor)
                        return charxColor
                    }}>Continue</button>
                </div>
               
            </div>
        )
    }
   
    return (
        <nav>
             {// buttons.map((button) => <button onClick={() => {
        //         if (button.desc === "character") {
        //             console.log("clicked character")
        //             document.getElementById("modalContainer").classList.add("show");
        //         }
        //         if (button.desc === "play") {
                  
        //         }
                
                
        //         }}>{button.desc}</button>)}
        //         {modalContainer()}
        //         {"Current Color: "+ charxColor}
             }
         </nav>
     
     )
    
}

export default Controls;
