import React from 'react';

class App extends React.Component{

  constructor () {
    super();
    this.state = {
      items: []
    }
  }

  componentWillMount = () => {
    fetch('https://swapi.co/api/people/?format=json')
      .then( response => response.json())
      .then( ({results: items}) => this.setState({items}))
  }

  filter = event => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    let items = this.state.items
    if (this.state.filter) {
      items = items.filter( item => 
        item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <label>
          Filter: <input type="text" onChange={this.filter} />
        </label>
        {items.map( (item, index) => 
              (<Person key={index} person={item} />)
          )}
      </div>
    )
  }
}

const Person = props => <h4>{props.person.name}</h4>

export default App;