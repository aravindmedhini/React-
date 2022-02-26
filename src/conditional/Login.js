import React from 'react'

function Welcome(){
    return<>
    <h1> Welcome Aravind Reddy</h1>
    <button> Logout</button>
    </>
}
function Guest(){
    return<>
    <h1> Welcome Guest</h1>
    <button> Login</button>
    </>
}

const Login = (props) => {
    const loggedIn = props.loggedIn;
      if(loggedIn){
          return <Welcome/>
      }
      return <Guest/> 
}

export default Login