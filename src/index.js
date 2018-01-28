import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyC37u4ogaD6lfik8pggXj3JfhO_5tRham0';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selecteVideo: null
    };

    this.videoSearch('amazing grace phil');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      );
    });
  }

  render() {
    const debouncedVideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
      return (
        <div>
          <SearchBar videosearch={debouncedVideoSearch}/>
          <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onSelectVideo={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
              videos={this.state.videos}
            />
          </div>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
