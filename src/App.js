import React, {Component} from 'react';


class App extends Component {

state = { 
  beer: []
}

getBeer = () => {
fetch('https://api.punkapi.com/v2/beers') 
.then(response => response.json())
.then(data => this.setState({beer: data}))
}

componentDidMount() {
this.getBeer()
}



render () {
  return (
    <div className="App">
      
    </div>
    );
  }
}
export default App;
