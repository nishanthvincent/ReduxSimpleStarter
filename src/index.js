import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyC37u4ogaD6lfik8pggXj3JfhO_5tRham0';

YTSearch({key: API_KEY, term: 'muzhuval john'}, (data) => {
  console.log(data);
});



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
      return (
        <div>
          <SearchBar />
        </div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
