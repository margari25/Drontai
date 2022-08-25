function Cat({ cat, i }) {
    return (
        <>
            <div style={{
                backgroundColor: i % 2 ? 'crimson' : 'skyblue',
                borderRadius: cat.weight > 4 ? '50%' : '0%',

            }}>
                {cat.name} {cat.weight}</div>
        </>
    )
}

export default Cat;
