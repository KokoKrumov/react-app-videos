import React from "react";
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {

    const {title, description, thumbnails} = video.snippet;

    return (
        <div className="video-item item" onClick={() => {onVideoSelect(video)}}>
            <div className={`image`} >
                <img alt={description} src={thumbnails.default.url}/>
            </div>
            <div className="content">
                <h1 className="header">{title}</h1>
            </div>
        </div>
    );
}

export default VideoItem;
