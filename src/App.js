import React, { Component } from 'react';
import Counter from './useState/Counter'
import LessText from './useState/LessText'
import StepTracker from './useState/StepTracker'
import LoginForm from './useState/LoginForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginForm/>
        </header>
        <StepTracker/>
        <Counter/>
        <LessText
          text={`Focused, hard work is the real key
                to success. Keep your eyes on the goal,
                and just keep taking the next step
                towards completing it.`}
          maxLength={35}
        />,
      </div>
    );
  }
}

export default App;
