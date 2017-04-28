import React from 'react';
import App1 from './App1.jsx';

class App extends React.Component {
   
      render(){
        return(
        <div>
            <h2>Outer</h2>
            <App1 />
        </div>
        );
    }
}


export default App;
