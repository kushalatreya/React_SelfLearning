import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Button from './Person/Button';

class App extends Component {
  state = {
    person: [
      { name: 'Maxim', age: 288 },
      { name: 'Manu', age: 29, },
      { name: 'Stephanie', age: 26 }
    ],
    anotherState: 'helllo'
  }

  switchNameHandler = () => {
    console.log('switch button was clicked')
    this.setState({
      person: [
        { name: 'Maximilian', age: 288 },
        { name: 'Manu', age: 29, },
        { name: 'Stephanie', age: 28 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Button onClick={this.switchNameHandler} buttonText="switch button" />
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age} />
        <Person 
        name={this.state.person[1].name}
        age={this.state.person[1].age}
        hobbies={this.state.person[1].hobbies}>my hobbies is racing</Person>
        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age} />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
