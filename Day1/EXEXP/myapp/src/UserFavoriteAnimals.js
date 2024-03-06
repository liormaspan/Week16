import React from "react"

class UserFavoriteAnimals extends React.Component{
    render(){
        return(
            <div>
                <h3>Favorite Animal</h3>
            
            <ul>
                {this.props.favAnimals.map((animal,index)=>
                    <li key={index}>{animal}</li>
                )}
                
            </ul>

            </div>
        )
    }
}
export default UserFavoriteAnimals;