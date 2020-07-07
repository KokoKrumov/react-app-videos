import React from "react";

const VideoDetail = ({video}) => {


    if (!video) {
        return <div>Loading...</div>
    }
    const {title, description} = video.snippet;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="ui segment">
            <div className={`ui embed`}>
                <iframe width="560"
                        height="315"
                        src={videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className="content">
                <h1 className="header">{title}</h1>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
