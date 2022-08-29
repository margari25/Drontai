import { useState } from "react";
import rand from "../../Functions/rand";
import randomColor from "../../Functions/randomColor";

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randomColor() }]);
    }

    const sortDesc = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }


    return (
        <>
            <h1>STATE 2 {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">
                {
                    sq.map((n, i) => <div style={{
                        backgroundColor: n.number < 300 ? 'black' : n.color,
                        borderRadius: n.number % 2 ? '0' : '50%',
                    }} key={i}>{n.number}
                    </div>)
                }
            </div>
            <button onClick={add}>add square</button>
            <button onClick={sortDesc}>Sort</button>
        </>
    )

}

export default Squares;