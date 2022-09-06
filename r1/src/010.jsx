import './App.scss';
import { useState } from 'react';
import Text from './Components/010/Text';
import Two from './Components/010/Two';
import InputText from './Components/010/InputText';
import Show from './Components/010/Show';

function App() {

    const [textNow, setTextNow] = useState('');

    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);

    const [text1, setText1] = useState('');

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>State Uplifting</h1>
                    <h2>TEXT: {textNow}</h2>
                    <Show text1={text1} />
                    <InputText setText1={setText1} text1={text1} />
                    <Text setTextNow={setTextNow} />
                    <div className="container">
                        {f1 ? <div className="kv"></div> : null}
                        {f2 ? <div className="ap"></div> : null}
                    </div>
                    <Two setF1={setF1} setF2={setF2} />
                </header>
            </div>

        </>
    );
}

export default App;