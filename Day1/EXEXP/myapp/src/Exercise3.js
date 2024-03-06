import React from "react";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component{
    render(){
        return(
            <div>
                <h1 style={style_header}>Hello World</h1>

                <p>This Is a paragraph</p>

                <a href="">This Is a Link</a>

                <form><h1>This Is a Form</h1>
                <p className="para">Enter Your Name</p>
                <input type="text"></input>
                <button>submit</button>
            </form><br></br>

                <h3>This Is an Image:</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&usqp=CAU"></img>

                <ul><h3>This Is a List</h3>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}

export default Exercise;