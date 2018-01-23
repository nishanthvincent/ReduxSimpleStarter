import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyC37u4ogaD6lfik8pggXj3JfhO_5tRham0';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {videos: []};
    
    YTSearch({key: API_KEY, term: 'muzhuval john'}, (videos) => {
      this.setState(videos);
      console.log(this.state);
    });
    
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
