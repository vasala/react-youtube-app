import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBLqNspqwJjPo2n6INHTQnkAS7Ku7f54NQ';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], currentVideo: null }
        this.videoSearch = this.videoSearch.bind(this);
    }


    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({ videos, currentVideo: videos[0] })
        });
    }


    render() {
        const videoCall = _.debounce(this.videoSearch, 400);
        return (
            <div>
                <SearchBar onSearchChange={videoCall} />
                <VideoDetail video={this.state.currentVideo} />
                <VideoList videos={this.state.videos}
                    onVideoSelect={(currentVideo) => {
                        this.setState({ currentVideo })
                    }}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
