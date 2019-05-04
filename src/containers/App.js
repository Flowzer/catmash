import React, {Component} from 'react';
import CatCompare from './cat-compare';
import './App.css';
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

  onClickListItem(cat){
    let index = 0;
    index = this.state.catList.indexOf(cat);
    if (index >=0){
      if (cat.hasOwnProperty('count')){
        cat.count += 1;  
      }
      else{
        cat.count = 1 ;
      }
      let newCatList = this.state.catList;
      newCatList[index] = cat;
      this.setState({catList:newCatList});
    }
    console.log(cat)
    this.getRandomNumber()
  }

  getRandomNumber(){
    RANDOM_NUMBER1 = Math.floor(Math.random() * 100);
    do{RANDOM_NUMBER2 = Math.floor(Math.random() * 100)}
    while(RANDOM_NUMBER1 === RANDOM_NUMBER2);
    this.setState({catRandom:[this.state.catList[RANDOM_NUMBER1],this.state.catList[RANDOM_NUMBER2]]});
  }

  //Permet de récupérer les données de l'URL
  getData(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://latelier.co/data/cats.json";

    fetch(proxyurl + url).then(response => response.text())
      .then(contents => JSON.parse(contents))
        .then(data => this.setState({catList:data.images},function(){this.getRandomNumber()}))
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
        <Title/>
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
