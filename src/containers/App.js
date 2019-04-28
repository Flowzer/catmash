import React, {Component} from 'react'
import CatCompare from './cat-compare';
import './App.css';


let RANDOM_NUMBER1, RANDOM_NUMBER2 = 0;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {catList:{},catRandom:{}};
  }

  componentWillMount(){
    this.getRandomNumber();
    this.getData()
  }

  onClickListItem(cat){
    console.log(cat)
    /* let count = this.cat.count;
    count += count; */
    this.componentWillMount();
  }

  getRandomNumber(){
    RANDOM_NUMBER1 = Math.floor(Math.random() * 100);
    do{RANDOM_NUMBER2 = Math.floor(Math.random() * 100)}
    while(RANDOM_NUMBER1 === RANDOM_NUMBER2);
  }

  //Permet de récupérer les données de l'URL
  getData(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://latelier.co/data/cats.json";

    fetch(proxyurl + url).then(response => response.text())
      .then(contents => JSON.parse(contents))
        .then(data => this.setState({catList:data.images,catRandom:[data.images[RANDOM_NUMBER1],data.images[RANDOM_NUMBER2]]}))
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
      
  }
  render(){
    const renderCatCompare = () => {
      if (this.state.catRandom.length > 0){
        return <CatCompare catRandom={this.state.catRandom} callback={this.onClickListItem.bind(this)}/>
      }
  }
    return (
      <div>
        <div className="title">
          <h1>CATMASH</h1>
        </div>
        <div className="App">
            {renderCatCompare()}
        </div>
      </div>
      
       
    );
  }
  
}

export default App;
