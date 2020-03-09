import React from 'react'
class Filter extends React.Component {


  render() {
    return (
      <form onSubmit={this.props.handleSubmit('henry')}  >
        <input type="text" name='search' />
        <label for='search'>name to search for </label>
        <button
          name="search" type="submit">search</button>
        <label for="search">search</label>
        <select name="book-Type" id="">
          <option value="free">not free</option>
          <option value="not-free">free</option>
        </select>
        <select name="print-type" id="">
          <option value="book">book</option>
          <option value="ebook">magazine</option>
        </select>
      </form >
    )
  }
}

export default Filter