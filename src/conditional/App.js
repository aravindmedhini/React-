import React from 'react'
import Garage from './Garage'
import Goal from './Goal'
import Login from './Login'




const cars = ['bmw', "audi" , "skoda"]


const App = () => {
  return (
    // <Login  loggedIn = {true} />
    // <Garage    cars = {cars} />
    <Goal    isGoal = {false}/>
  )
}

export default App