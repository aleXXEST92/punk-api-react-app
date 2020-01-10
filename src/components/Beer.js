import React, { Component } from 'react'
import LikeMeButton from './LikeMeButton'
// import LikedButton from './LikedButton'


export default class Beer extends Component {

state = {
isFav: false
}

toggleLike = () => { 
// make a copy of state
// change isFav: true
// setState

let isFav = this.state.isFav

isFav = !isFav
console.log(isFav)

this.setState({
isFav 
})

}

    render() {
        return (
            <div>
            {this.props.beers.map(item => {
                return(
                    <li key= {item.id}>
                        <b>{item.name}</b>
                        <LikeMeButton/>
                       <ul> 
                           <u>{item.tagline}</u>
                           <br></br>
                           ABV: {item.abv}
                           <br></br>
                           {item.description}
                           <br></br>
                         
                        </ul>
                    </li>
                )
            })}
            </div>
        )
    }
}
