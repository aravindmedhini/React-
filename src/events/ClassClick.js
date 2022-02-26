import React, {Component} from 'react'

class ClassClick extends Component {

clickHandler(){
    console.log("clixk class")
}
    render(){
        return (
            <div>
                <button onClick = {this.clickHandler}> click from class</button>
            </div>
        )
    }
}

export default ClassClick