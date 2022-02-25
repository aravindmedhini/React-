import React from 'react'

const Avathar = (hash) => {
  let url =`https://gravatar.com/avatar/${hash}` 
  return (
    <img src= {url}
    className='avatar'  alt='avathar'></img>
  )
}

export default Avathar