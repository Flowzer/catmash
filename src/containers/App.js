import React, {Component} from 'react';
import CatCompare from './cat-compare';
import '../style/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CatRanking from './cat-ranking';
import Title from '../components/title';


let RANDOM_NUMBER1, RANDOM_NUMBER2 = 0;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {catList:{},catRandom:{}};
  }

  componentWillMount(){
    this.getData()
  }

  //Ajoute 1 vote lorsque l'on clique sur un chat 
  onClickListItem(cat){
    let index = 0;
    index = this.state.catList.indexOf(cat);
    if (index >=0){
      cat.count += 1; 
      let newCatList = this.state.catList;
      newCatList[index] = cat;
      this.setState({catList:newCatList});
    }
    console.log(cat)
    this.getRandomNumber()
  }

  //Génère 2 numéros aléatoire et remplit le state catRandom
  getRandomNumber(){
    RANDOM_NUMBER1 = Math.floor(Math.random() * 100);
    do{RANDOM_NUMBER2 = Math.floor(Math.random() * 100)}
    while(RANDOM_NUMBER1 === RANDOM_NUMBER2);
    this.setState({catRandom:[this.state.catList[RANDOM_NUMBER1],this.state.catList[RANDOM_NUMBER2]]});
  }

  //Rajoute la propriété count et la met a 0
  addCountProperty(){
    let newCatListCount = this.state.catList;
    newCatListCount.forEach(element => {
        element.count = 0;
    });
    this.setState({catList:newCatListCount},function(){this.getRandomNumber()});
  }

  //Permet de récupérer les données de l'URL
  getData(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://latelier.co/data/cats.json";

    fetch(proxyurl + url).then(response => response.text())
      .then(contents => JSON.parse(contents))
        .then(data => this.setState({catList:data.images},function(){this.addCountProperty()}))
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
    
    
    
  }
  render(){
    const renderCatCompare = () => {
      if (this.state.catRandom.length > 0){
        return <CatCompare catRandom={this.state.catRandom} callback={this.onClickListItem.bind(this)}/>
      }
    }
    const renderCatRanking = () => {
      if (this.state.catList.length > 0){
        return <CatRanking cat={this.state.catList}/>
      }
    }
  
    return (
      <BrowserRouter>
        <div>
          <header>
            <Title/>
          </header>
          <Switch>
            <Route exact path="/" render={() => renderCatCompare()}/>
            <Route exact path="/ranking" render={() => renderCatRanking()}/>
          </Switch>
        </div>
        
        
      </BrowserRouter>
      
       
    );
  }
  
}

export default App;
