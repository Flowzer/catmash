import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.getData()
}

//Permet de récupérer les données de l'URL
  getData(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://latelier.co/data/cats.json";
    fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => console.log(JSON.parse(contents)))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
    
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>CATMASH</h1>
        </header>
      </div>
    );
  }
  
}

export default App;
