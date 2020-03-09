import React from 'react'
class Filter extends React.Component {


  render() {
    return (
      <form  >
        <input type="text" name='search' />
        <label for='search'>name to search for </label>
        <button onClick={this.props.handleSubmit('henry')}
          name="search" >search</button>
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