import React from 'react';
//import ReactDOM from 'react-dom'

class App extends React.Component{

  constructor () {
    super()
    this.state = {
      a: '',
      b: '',
    }
  }

  update = () => {
    this.setState({
      a: this.a.value,
      b: this.b.value,
      c: this.c.refs.input.value // ReactDOM.findDOMNode(this.c).value
    })
  }

  render() {
    return (
      <div>
        <input 
        ref={ node => this.a = node }
        type="text"
        onChange={this.update}
        />
        {this.state.a}
        <hr/>
        <input
          ref={node => this.b = node}
          type="text"
          onChange={this.update}
        />
        {this.state.b}
        <hr />
        <Input
          ref={ component => this.c = component}
          update={this.update}
        />
        {this.state.c}
      </div>
    )
  }
}

class Input extends React.Component {
  render () {
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update} />
      </div>
    )
  }
}

export default App;