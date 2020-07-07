import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../api/youtube";
import './App.css'

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onSearchSubmit = async (term) => {

        //ASYNC API request
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        })

    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    render() {
        return (
            <div className={`app ui container`}>
                <SearchBar onSearch={this.onSearchSubmit}/>
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="six wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>


            </div>
        )
    }
}

export default App;
