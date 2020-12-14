import React from 'react';
import ReactDOM from 'react-dom';



function App(props) {
  return (
    <div>
        <h1>Your Name : {props.name}</h1>
    </div>
  );
}
ReactDOM.render ( <App name = "rahul" empid= "emp101" />, document.getElementById('root')) 
 

