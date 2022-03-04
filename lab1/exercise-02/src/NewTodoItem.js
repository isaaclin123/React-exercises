import React, {useState,useEffect} from 'react';
function NewTodoItem({ onAddDescription }) {
    
    const [content, setContent] = useState('');
    const myRef = React.createRef();
    
        
    useEffect(() => {
        if (myRef.current.innerHTML!=="") { 
            myRef.current.innerHTML = "";
        }
    })

    return(
        <div>
            <h1>Add Item</h1>
            <label htmlFor="description">Description</label>
            <input id="description" type="text" value={content} onInput={e=>setContent(e.target.value.trim())}/>
            <button onClick={() => {
                content !== "" ? onAddDescription(content) : myRef.current.innerHTML = "please enter something";
            }}>Add</button>
            <p ref={myRef} style={{ color: "red"}}></p>
        </div>
    )
}
export default NewTodoItem;