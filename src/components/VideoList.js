import React from "react";
import VideoItem from "./VideoItem";


// вместо props, можем да напишем {videos}. това е деструкториране още в параметъра на ф-ята
const VideoList = ({videos, onVideoSelect}) => {

    const list = videos.map((video) => {
        return  <VideoItem key={video.id.videoId} video={video}   onVideoSelect={onVideoSelect} />;
    })

    return (
        <div className={`ui items`}>
            {list}
        </div>
    )
}

export default VideoList;
