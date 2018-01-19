import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

console.log(SearchBar);

const API_KEY = 'AIzaSyC37u4ogaD6lfik8pggXj3JfhO_5tRham0';

const App = () => {
  return (<div>
            <SearchBar />
          </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));
