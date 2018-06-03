import React, { Component } from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div></div>;
    }

    const vidId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${vidId}`;
    return (
        
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}/>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;