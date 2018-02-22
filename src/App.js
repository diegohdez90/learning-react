import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{

  constructor () {
    super();
    this.state ={
      txt: 'this is the set state',
      cat: 0,
    }
  }

  update = event => {
    this.setState({
      txt: event.target.value,
    })
  }

  render() {
    let {txt, cat} = this.props;
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <h1>{txt}</h1>
        <p>The cat value is {cat}</p>
        <p>{this.state.txt}</p>
        <Widget update={this.update}/>
        <p>{this.state.txt} - {this.state.cat}</p>
      </div>
    )
  }
}

const Widget = props => 
  (<div>
    <label>
      txt: <input type="text" onChange={props.update} />
    </label>
  </div>)


App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

export default App;