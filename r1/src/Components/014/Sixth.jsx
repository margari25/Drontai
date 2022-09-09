import { useEffect } from "react";
import { useState } from "react";
import randColor from '../../Functions/randColor';

function Sixth() {


    const [balls, setBalls] = useState([]);

    useEffect(() => {
        setBalls([...Array(10)].map(() => randColor()));
    }, []);

    const boo = color => {
        setBalls(b => b.filter(bo => bo !== color));
    } 

    return (
        <div className="container">
            {
                balls.map((b, i) => <div onClick={() => boo(b)} style={{backgroundColor: b}} className="ap" key={i}></div>)
            }
        </div>
    )

}

export default Sixth;