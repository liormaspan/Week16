import React from "react";

class Class extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
            msg:'hello'
        }
        console.log('constractor');
    }


    addOne=()=>{
        this.setState({count:this.state.count+1})
    }

rander(){
    return(
        <div>
            <h2>{this.state.msg}class conponet</h2>
            count: {this.state.count}
            <button onClick={this.addOne}>+</button>
        </div>
    )
}
}
export default Class;