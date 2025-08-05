import { useState } from "react"
import { Count } from "./Count"
export  function Stars () {
    const [count, setCount] = useState(0)
    function onLikePLus () {
      if (count >= -1 && count <= 4){
        setCount(count + 1)
      }
    }
    function onLikeMinus(){
        if (count >= 0 && count <= 5) {
            setCount(count - 1)
        }
    }
    return (
        <>
        <Count count={count}
            onLikePlus ={onLikePLus}
            onLikeMinus = {onLikeMinus}/>
        </>
    )
}