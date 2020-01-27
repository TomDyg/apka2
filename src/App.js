import React from 'react';
import Header from './Header.js';
import Form from './Form.js';   
import List from './List.js';


class App extends React.Component {

  state = {title:'Apka2',
            numbers : [1, 2, 3, 4, 5]
}

  

  constructor(props) {
    super(props);
    this.changeTitle=this.changeTitle.bind(this);
    this.save=this.save.bind(this);
  }

  changeTitle() {
    this.setState({title:'Apka2 !!!'});
  }

  save(value) {
    //console.log(value);
    const numbers = [...this.state.numbers];
    numbers.push(value);
    this.setState({numbers:numbers});
  }

  render() {
    const {title,numbers} = this.state;
    return(  
    <div>
      <Header title={title}/>
      <button onClick={this.changeTitle}>zmień</button>
      <Form save={this.save}/>
      <List numbers={numbers}/>
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
