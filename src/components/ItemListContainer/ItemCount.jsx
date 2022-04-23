import React from "react";
import HookState from "../HookState/HookState";

function ItemCount ({stock,initial, onAdd}){
    

    return (
        <div className="card" style={{width:"18rem"}}>
        <img src="https://th.bing.com/th/id/R.9b8a5656e1c6a50d579d9708b595acbe?rik=uG%2bJBz4HKwRZpQ&pid=ImgRaw&r=0" className="card-img-top" alt="..." />
        <div className="card-body">
            <HookState/>
        </div>
    </div>
    );
}
export default ItemCount