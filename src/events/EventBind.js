import React, {Component} from 'react'

class EventBind extends Component{
      state = {

        messege : 'hiiiiiiiiiiii     user'
      }
    //    clickHandler(){
    //        this.setState({messege : "good byee user visit again"})
    //    }

    clickHandler = () =>{
        console.log(this)
        this.setState({messege : "good byee user visit again"})
    }

    render() {
        return(
            <div>
                <h1>{this.state.messege}</h1>
                {/* <button onClick = {this.clickHandler.bind(this)}> click </button> */}
                <button onClick = {() => this.clickHandler()}> click </button>
            </div>
        )
    }
}

export default EventBind


//1. binding in render method --- this.clickHandler.bind(this)
//2.  using arrow functions in render method
//3.  Arrow function in your method
