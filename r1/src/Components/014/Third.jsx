import { useState } from 'react'

function Third() {

    const [show, setShow] = useState(false);

    return (
        <>
                {
                 show ? <div className="kv" onClick={()=> setShow(false)}></div> : null
                 
                  
                }
            <button onClick={() => setShow(true)}>Add</button>

        </>
    )
}

export default Third;