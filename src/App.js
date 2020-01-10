import React, {Component} from 'react';
import Beer from './components/Beer'


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
      {this.state.beer.map((brew, index) => (
        <Beer 
        key={brew.id}
        name={brew.name}
        tagline={brew.tagline}
        abv={brew.abv}
        description={brew.description}
        />
      ))  
    }  
    </div>
    );
  }
}
export default App;
