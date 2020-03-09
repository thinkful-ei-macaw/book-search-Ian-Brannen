import React from 'react'
class BookList extends React.Component {


  render() {

    const books = this.props.items.map(item => {
      return <li >{item.volumeInfo.title}</li>
    })
    return (
      <ul>{books}</ul>
    )
  }
}

export default BookList