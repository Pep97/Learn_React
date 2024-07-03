import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.components';
import './app.css';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }));
  }

  onSearchChange = (event) => {
        
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {return {searchField};}); 
  }

  render() {

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = this.state.monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });



    return (<div className="App">
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
      <CardList  monsters={filteredMonsters}/>

        {/* {filteredMonsters.map((monsters) => {
        return <div key={monsters.name}><h1>{monsters.name}</h1></div>; */}

        {/* if (event.target.value === true) {
          loop the value of name or surname, and upload only the value that are true}
        else {
          return <div key={monsters.name}><h1>{monsters.name}</h1></div>
        } */}


     

        
        
      </div>
    );
  }
}

export default App;





{/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          
          {/* </header><button onClick={() => {
            this.setState({
              name: {firstName: 'Yihua2' , lastName: 'Zhang2'}  
             
            })

          */}{/*

            <button onClick={() => {
              this.setState(
                () =>{
                  return {
                    name: { firstName: 'Yihua2', lastName: 'Zhang2'},
                  };
                }
                );
              }}
            >
              Change name
            </button>
        </header>

        */}