import React from 'react';
import Filter from './Filter';

class App extends React.Component {
  static defaultProps = { state: [] };
  state = {
    books: [],
    error: "none"
  }



  handleSubmit = (search) => {
    const url = `GET https://www.googleapis.com/books/v1/volumes?q=`;
    fetch(url + search)
      .then(res => res.ok ? res.json : Promise.reject('something broke'))
      .then(json => this.setState({ json }))
      .then(json => console.log(json))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <main className='App'>
        {<div>
          <header>
            <h1>Booksearch</h1>
          </header>
          <Filter
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
        </div>
        }
      </main>
    );
  }
}

export default App;