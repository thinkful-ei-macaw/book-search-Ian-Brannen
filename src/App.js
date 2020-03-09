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
    console.log(e.target.search.value)
    const url = `https://www.googleapis.com/books/v1/volumes?q=${e.target.search.value}&maxResults=20&filter=${e.target['book-Type'].value}&printType=${e.target['print-type'].value}`;
    console.log(this.state.q);
    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject('something broke'))
      .then(json => {


        this.setState({

          books: json.totalItems ? json.items : []

        })
      })
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
            <input type="text" id='search' name='search' />
            <label htmlFor='search'>name to search for </label>
            <button
              name="search1" type="submit" >search</button>
            <label htmlFor="search">search</label>
            <select name="book-Type" id="">
              <option selected value="ebooks">not free</option>
              <option value="free-ebooks">free</option>
            </select>
            <select name="print-type" id="">
              <option selected value="books">book</option>
              <option value="magazines">magazine</option>
            </select>
          </form >
          <BookList items={this.state.books} />
        </div>
        }
      </main>
    );
  }
}

export default App;