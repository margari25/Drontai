import { useState } from "react";

function Fourth() {

    const [show, setShow] = useState(false);

    return (
        <>
        {
         show ? <img src="https://static.wikia.nocookie.net/warlock-of-the-magus-world/images/d/df/Pink_Rabbit_3278.jpg" alt="pink"></img> : null
        }
        <button onClick={() => setShow(s => !s)}>Show</button>
        </>
    )
}

export default Fourth;