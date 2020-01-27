import React from 'react';
import Header from './Header.js';



class App extends React.Component {

  state = {title:'Apka2'}

  constructor(props) {
    super(props);
    this.changeTitle=this.changeTitle.bind(this);
  }

  changeTitle() {
    this.setState({title:'Apka2 !!!'});
  }

  render() {
    const {title} = this.state;
    return(  
    <div>
      <Header title={title}/>
      <button onClick={this.changeTitle}>zmień</button>
    </div>
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

export default App;
