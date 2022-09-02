function InputText({text1, setText1}) {

    

    return (
        <>
        <div className="form-container">
        <h2 style={{textTransform: 'uppercase'}}>{text1}</h2>
        <input type="text" value={text1} onChange={e => setText1(e.target.value)}></input>   
        </div>
        </>
    );
}

export default InputText;