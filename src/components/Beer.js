import React, { Component } from "react";
import LikeMeButton from "./LikeMeButton";
import LikedButton from "./LikedButton";

export default class Beer extends Component {
  state = {
    isFav: false
  };

  toggleLike = () => {
    // make a copy of state
    // change isFav: true
    // setState

    let isFav = this.state.isFav;

    isFav = !isFav;
    console.log(isFav);

    this.setState({
      isFav
    });
  };

  render() {
    let isFav = this.state.isFav

    return (
        
      <div>
        <h2 className="name">{this.props.name}</h2>
        {/* <LikeMeButton button={this.toggleLike} />
        <LikedButton button={this.toggleLike} /> */}
        {isFav ? (<LikedButton button={this.toggleLike} />) : (<LikeMeButton button={this.toggleLike} />)}
        <h3>{this.props.tagline}</h3>
        <h4>ABV: {this.props.abv}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
