import {useLayoutEffect, useState } from "react";

function HookUseLayoutEffect(){

const [count, setCount] = useState(0);

useLayoutEffect(() =>{
    if(count > 3) setCount(0)

}, [count])

const Increment = () =>{
    setCount(count + 1)
}
return(
    <div style={{padding: 20}}>
    <h1>{count}</h1>
    <button onClick={Increment} >Increment</button>
    </div>
)
}
export default HookUseLayoutEffect;