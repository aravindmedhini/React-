import React from 'react'


function MadeGoal(){
    return <h1> aheeeee goal</h1>
}
function MissedGoal(){
    return<h1> OH SHIT </h1>
}

const Goal = (props) => {

    const isGoal = props.isGoal

  return (
    <>
    { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  )
}

export default Goal