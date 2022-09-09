import { useState } from "react";

function Seventh() {

    const [kv, setKv] = useState([]);

    const add = () => {
        setKv(k => [...k, 'crimson', 'skyblue']);
    }

    return (
        <>
            <div className="container">
                {
                    kv.map((c, i) => <div key={i} className="kv" style={{ background: c }}></div>)
                }
            </div>
            <button onClick={add}>Add</button>
        </>
    )


}

export default Seventh;