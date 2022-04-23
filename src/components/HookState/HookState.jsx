import React, {useState} from "react";

const HookState =()=> {
    const [contador,setContador] = useState (0)
    return (
        <div>
            style {{
                display:"flex",
                justifycontent:"space-around",
            }}
            <button onClick={()=> setContador (contador -1 )}>Restar 1</button>
            <h1>{contador}</h1>
            <button onClick={()=>setContador (contador+1)}>Sumar 1</button>
        </div>
    )
}
export default HookState