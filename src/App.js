import React from 'react';

class App extends React.Component{

  constructor () {
    super()
    this.state = {
      currentEvent: '---'
    }
  }

  update = event => {
    this.setState({
      currentEvent: event.type
    })
  }

  render() {
    let {txt, cat} = this.props;
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}


export default App;