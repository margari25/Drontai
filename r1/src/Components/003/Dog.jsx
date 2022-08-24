import rand from '../../Functions/rand';

function Dog() {

    return (
        <>
            <h2 style={{
                color: rand(0, 1) ? 'red' : 'blue',
                fontSize: '140px'
            }}>
                Dog {true ? 'jo' : 'no'}</h2>
            <h3 className="dog">Big {rand(100, 999)}</h3>
        </>
    );
}

export default Dog;