import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState('');

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }

    const colorControl = e => {
        setColor(e.target.value);
    }

    const rangeControl = e => {
        setRange(e.target.value);
    }

    return (

        <>
            <div className="form-container">
                <h2>TEXT</h2>
                <input type="text" onChange={control} value={text}></input>
            </div>

            <div className="form-container">
                <h2 style={{ color }}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
                <button style={{ marginTop: '10px' }} onClick={() => setColor('#ff0000')}> Set red</button>
            </div>

            <div className="form-container">
                <h2>RANGE: {range.padStart(3, 0)}</h2>
                <input type="range" min='0' max='10' onChange={rangeControl} value={range}></input>
            </div>
        </>
    )
}

export default Text;