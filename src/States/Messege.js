import React, {Component} from "react";

class Messege extends Component{

    state = {
         Messege : "Sneha"
    }

    render(){
        return(
            <h1> Hello {this.state.Messege}</h1>
        )
    }
}

export default Messege
