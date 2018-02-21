import React from 'react';

class App extends React.Component{
  render() {
    let {txt} = this.props;
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <h1>{txt}</h1>
      </div>
    )
  }
}

export default App;