import React from 'react'

const Garage = (props) => {
      const cars = props.cars;
  return (
    <>
       <h1>Garage</h1>
       {cars.length > 5 && <h2>Lets Release cars</h2>}

        
    </>
  )
}

export default Garage