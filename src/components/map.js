import React from "react";
import '../styles/map.css';

const mapArr = [
    ['L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','L'],
    ['L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L','L']
]
export class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (<div className="map">
            {   
                
                mapArr.map((element, ind) => {
                    console.log(mapArr)
                    for (let index = 0; index <= 10; index++) {
                        const row = index;
                        console.log(element)
                        console.log([index])
                        if (element[index] === 'L') { return <img id={"" + row + ":" + element[index] } alt={"" + row + ":" + element[index] } className="limit"/>}
                        if (element[index] === 'G') { return <img id={"" + row + ":" + element[index] } alt={"" + row + ":" + element[index] } className="ground"/>}
                        
                    }
                   
                })
            }
        </div>)
    }
}
export default Map;