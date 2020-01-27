import React from 'react';



export default class Header extends React.Component {

  counter = 0;
  render() {
    const {title} = this.props;
    this.counter++;
    return(  
    <div>Renderingi: {this.counter} {title}</div>
  )
  }

}


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


