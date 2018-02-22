import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{

  update = event => {
    this.setState({
      txt: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

const Button = props => <button>{props.children}</button>

class Heart extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}

export default App;