export function selectBook(book) {
  // Select book is an action creator, it needs to return with a type and an optional payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
