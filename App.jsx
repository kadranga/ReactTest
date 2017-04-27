import React from 'react';

class App extends React.Component {
   
     render(){
        return(
        <div>
            <h1>Hello at {this.props.now}{' '}{this.props.b}</h1>
        </div>
        );
    }
}



export default App;