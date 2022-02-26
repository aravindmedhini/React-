// event handling 

//1.function component


import React from 'react'

const FunctionalClick = () => {

   function clickHandler(){
       console.log("you clicked button")
   }


  return (
    < div>
    <div>FunctionalClick</div>
    <button onClick = {clickHandler}> Click </button>
    </div>
  )
}

export default FunctionalClick