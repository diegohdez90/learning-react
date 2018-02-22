import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

  constructor () {
    super();
    this.state = {
      val: 0
    }
  }

  update = event => {
    this.setState({
      val: this.state.val + 1
    })
  }

  render() {
    console.log('render')
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    )
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.inc = setInterval(this.update, 500)
  }

  componentWillMount () {
    console.log('componentWillMount')
    this.setState({m: 2})
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  
  mount = () => {
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render () {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;