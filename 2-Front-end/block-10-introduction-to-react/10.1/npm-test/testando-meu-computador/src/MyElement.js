import './MyElement.css';
import React from 'react';

// function Tick() {
// class Tick extends React.Component {
//   render () {
//     return setInterval((
//          (
//           <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString('pt', { hour24: true })}.</h2>
//           </div>
//         )
//     ), 1000);
//   }
//   // ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(Tick, 1000);

class MyElement extends React.Component {
  // const timer = setInterval(tick, 1000);
  render() {
    return (
      <div className="top-menu">
        <h1>This is my test element</h1>
        <hr></hr>
        {/* <Tick/> */}
      </div>
    );  
  }
}

export default MyElement;
