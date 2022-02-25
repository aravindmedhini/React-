import React from 'react'
import Tweet from './Static-tweet/Tweet'

const testTweet = {
  messege : "something about cats",
  gravitor : "xyz",
  author : {
    handle : "catperson",
    name : "cat Person name"
  },
  likes : 2,
  retweet : 0,
  timestamp : "3 hours ago"
}
const App = () => {
  return(
    <div>
      <Tweet  tweetData = {testTweet}/>
      
    </div>
  )
}
export default App