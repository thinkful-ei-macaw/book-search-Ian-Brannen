import React from 'react'
class BookList extends React.Component {


  render() {
    console.log(this.props.items)
    const books = this.props.items.map(item => {
      let price = '';
      if (item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount) {
        price = item.saleInfo.listPrice.amount;
      }
      return <li>{item.volumeInfo.title} {item.volumeInfo.description} {price} {item.volumeInfo.authors} <img src={item.volumeInfo.imageLinks.thumbnail} />
      </li>

    })
    return (
      <ul>{books}</ul>
    )
  }
}

export default BookList