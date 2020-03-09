import React from 'react';
import BookList from './Book-List'

class App extends React.Component {
  static defaultProps = { state: [] };
  state = {
    books: [],
    error: "none",
    q: ""
  }

  queryChange = (e) => {
    e.preventDefault();
    this.setState({
      q: e.target.search.value
    })
  }

  change = (e) => {
    this.setState({
      q: e,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state.q)


    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&maxResults=20`;
    console.log(this.state.q);
    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject('something broke'))
      .then(json => this.setState({
        books: json
      }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <main className='App'>
        {<div>
          <header>
            <h1>Booksearch</h1>
          </header>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name='search' onSubmit={e => {
              this.change(e.target.value)
            }} />
            <label htmlFor='search'>name to search for </label>
            <button
              name="search" type="submit" >search</button>
            <label htmlFor="search">search</label>
            <select name="book-Type" id="">
              <option value="free">not free</option>
              <option value="not-free">free</option>
            </select>
            <select name="print-type" id="">
              <option value="book">book</option>
              <option value="ebook">magazine</option>
            </select>
          </form >
          <BookList items={this.state.books.items} />
        </div>
        }
      </main>
    );
  }
}

export default App;