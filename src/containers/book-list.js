import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {selectBook}  from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {


  renderList() {
    return this.props.books.map(function (book) {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    }, this)
  }

  render() {
    return (<ul className="list-group col-sm4">
        {this.renderList()}
      </ul>
    )

  }

}

//whatever is returned from this function is returned as props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}


// Anything returned from this function will be returned as props.
// on the booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectbook is called, the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
