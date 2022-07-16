// import { useState, useEffect } from 'react';
import '../styles/controls.css';
export const UI = (props) => {
    // const [counter, setCounter] = useState(10)
    // useEffect((counter) => {
    //     const countdown = setInterval((counter) => {
    //         setCounter(count => count - 1);
    //         console.log(counter)
    //         if (counter <= 0 ) {
    //             clearInterval(countdown);
    //             document.getElementById("countdown").style.display="none"
    //         }
    //      }, 1000);
         
         
    // }, [])
    return (
       <div>
            <p className="killCounter" id="killCounter">Kills 10 enemies to win! </p>
            {/* {(counter === 0 )? null :  <h1 className="countdown">{counter}</h1> } */}
            
       </div>
    )
}
export default UI;