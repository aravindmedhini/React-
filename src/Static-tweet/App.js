import React from 'react'
import Tweet from './Tweet'

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
const testTweet2 = {
  messege : "something about dogs",
  gravitor : "dogs",
  author : {
    handle : "dogperson",
    name : "dog Person name"
  },
  likes : 2,
  retweet : 0,
  timestamp : "2 hours ago"
}
const testTweet3 = {
  messege : "something about pigs",
  gravitor : "xqz",
  author : {
    handle : "pigperson",
    name : "pig Person name"
  },
  likes : 2,
  retweet : 0,
  timestamp : "8 hours ago"
}
const testTweet4 = {
  messege : "something about snakes",
  gravitor : "xyz",
  author : {
    handle : "snakeperson",
    name : "snake Person name"
  },
  likes : 2,
  retweet : 0,
  timestamp : "1 hours ago"
}
const App = () => {
  return(
    <div>
      <Tweet  tweetData = {testTweet}/>
      <Tweet  tweetData = {testTweet2}/>
      <Tweet  tweetData = {testTweet3}/>
      <Tweet  tweetData = {testTweet4}/>
      
    </div>
  )
}
export default App