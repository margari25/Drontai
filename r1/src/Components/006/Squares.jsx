import { useState } from "react";
import rand from "../../Functions/rand";
import randomColor from "../../Functions/randomColor";

function Squares() {


    const [sq, setSq] = useState([]);
    const [selected, setSelected] = useState(null)

    const add = () => {
        setSq(s => [...s, {
            number: rand(100, 999),
            color: randomColor(),
            row: s.length,
            show: true
        }]);
    }

    const sortDesc = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }

    const sortAsc = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number));
    }

    const sortDefault = () => {
        setSq(s => s.map(square => ({ ...square, show: true })).sort((a, b) => a.row - b.row));
    }

    const filterBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: true } : { ...square, show: false }));
    }


    const filterColourful = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: false } : { ...square, show: true }));
    }

    const doClick = num => {
        setSelected(num);
        setSq(s => s.map(square => square.number === num ? { ...square, show: false } : { ...square }));

    }

    const backLastDeleted = () => {
        setSq(s => s.map(square => square.number === selected ? { ...square, show: true } : { ...square }));

    }

    const firstFive = () => {
        setSq(s => s.map((square, i) => i < 5 ? { ...square, show: true } : { ...square, show: false }));

    }

    const sorting = () => {
        setSq(s => s.map(square => square.number === sortDesc() ? { ...square, show: sortAsc() } : { ...square, show: sortDesc() }));

    }


    return (
        <>
            <h1 style={{ color: randomColor() }}> {selected} STATE 2/ {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">
                {
                    sq.map((n, i) => n.show ? <div style={
                        {
                            backgroundColor: n.number < 300 ? 'black' : n.color,
                            borderRadius: n.number % 2 ? null : '50%'
                        }
                    } key={i} onClick={() => doClick(n.number)}>{n.number}</div> : null)
                }
            </div>
            <div>
                <button onClick={add}>add square</button>
                <button onClick={sortDesc}>SortDesc</button>
                <button onClick={sortAsc}>SortAsc</button>
                <button onClick={sortDefault}>SortDefault</button>
                <button onClick={filterBlack}>Black</button>
                <button onClick={filterColourful}>Except black</button>
                <button onClick={backLastDeleted}>Back deleted</button>
                <button onClick={firstFive}>First five</button>
                <button onClick={sorting}>SORT</button>
            </div>
        </>
    )

}

export default Squares;