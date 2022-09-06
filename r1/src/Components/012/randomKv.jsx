import { useState, useEffect } from 'react'
import randomColor from '../../Functions/randomColor';

function randomKv() {

    const [randomkv, setRandomkv] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('randomkv');
        if (null === data) {
            setRandomkv([]);
        } else {
            setRandomkv(JSON.parse(data));
        } 
    }, []);

    useEffect(() => {
        if (null === randomkv) {
            return;
        }
        localStorage.setItem('randomkv', JSON.stringify(randomkv));
    }, [randomkv]);

    return (
        <>
        <div className="container">
            <h1 style={{ color: randomColor() }}></h1>
        </div>
        <button onClick={() => setRandomkv(k => [...k ?? [], ''])}>Add</button>
        </>
    )
}

export default randomKv;