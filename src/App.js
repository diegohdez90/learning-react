import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  render() {
    let {txt, cat} = this.props;
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <h1>{txt}</h1>
        <p>The cat value is {cat}</p>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

export default App;