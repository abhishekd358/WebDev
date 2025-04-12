//  renderring list of data 
import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      persons : [
        {name : 'Mexima', rollNo: 1},
        {name : 'Domatian', rollNo: 500},
      ]

    };
    
  }
  removeHandler = (componenetDivIndex)=>{
    let arrayCopy= this.state.persons // creating copy beacuse if we remove element from array then we again upadte the array with updated elements
    arrayCopy.splice(componenetDivIndex, 1);
    // remove the index value from array and return the update array
    // now we set the updated array into the state
    this.setState({persons: arrayCopy});
  };

  render() {
    let personsCopy;
    // here we managing to loop on array of index using the map function 
    personsCopy = this.state.persons.map((p, index)=>{
      return <Person key= {index} name={p.name} rollNo={p.rollNo} remove={()=> this.removeHandler(index)}/> // to avoid key error we add the key and assing the index of each element in array
    });
    console.log(personsCopy);

  return (
      <div>
      {personsCopy}
      </div>

    // ================== WIthout map hardcode the list item access =======
    // <div>
    //   <Person name= {this.state.persons[0].name} rollNo = {this.state.persons[0].rollNo}/>
    //   <Person name= {this.state.persons[1].name} rollNo = {this.state.persons[1].rollNo}/>
    // </div>
  );
  };


}

export default App;

