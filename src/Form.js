import React from 'react';



export default class Form extends React.Component {

  state = {dodaj:''};

  constructor(props) {
    super(props);
    this.add=this.add.bind(this);
    this.save=this.save.bind(this);
  }

  add(event) {
    this.setState({dodaj:event.target.value})
  }
  save() {
    this.props.save(this.state.dodaj)
  }
  render() {
    const {dodaj} = this.state;

    return(  
    <div><input onChange={this.add} name="dodaj" type="text" value={dodaj}></input><div onClick={this.save}>Zapisz</div></div>
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


