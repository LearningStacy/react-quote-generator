import './App.css';
// import React, {useState, useEffect} from 'react';
import axios from 'axios';

// function App() {
//   const [advice, setAdvice] = useState('');
 
//   useEffect(() => {
//     axios.get('https://api.adviceslip.com/advice')
//     .then((response)=> {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     }
//    setAdvice = response;
//   },[])
 
  
//   return (
//     <div className="App">
//       <h2>Hello</h2>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  state = {advice: ''};
  
  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=> {
      const {advice} = response.data.slip;
      // console.log(advice);
      this.setState({advice});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  render() {
    const {advice} = this.state
    return (
      <div className="app">
        <div className="card">
          
          <h1 className="heading">
            {advice}
          </h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Another Advice</span>
          </button>
        </div>
      </div>
    )
  }
}

