import React from 'react'
import Avathar from './Avathar'
import Messege from './Messege '
import Author from './Author'
import './Tweet.css'
import Time from './Time'
import Options from './Options'

const Tweet = ({ tweetData }) => {
   console.log(tweetData);
  return (
    <div className='tweet'>
        <Avathar  hash = { tweetData.gravitor}/>
        <div className='content'>
        <Author autor = { tweetData.author} /> <Time  time = { tweetData.timestamp}/>   
        <Messege text = {tweetData.Messege} />
        <div  className='buttons'>
        <Options/>
        </div> 
        </div> 
    </div>
  )
}

export default Tweet