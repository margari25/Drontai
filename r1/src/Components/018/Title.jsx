import { useState, useEffect } from 'react';
import axios from 'axios';

function Title() {

    const [title, setTitle] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setTitle(res.data.sort((a, b) => b.title.length - (a.title.length)));
            })
    }, []);

    return (
        <>
            <ul>
                {
                    title.map(t => <li key={t.id} style={{
                        color: t.title.length < 20 ? 'crimson' : null
                    }}>
                        {t.title}
                    </li>)}
            </ul>
        </>
    )
}

export default Title;