import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
        return (
            <li onClick = {()=> {this.props.vidSelectCall(this.props.video)}}>
                <div className="list-group-item">
                    <div className="media-left">
                        <img src={imageUrl} className="media-object"/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.video.snippet.title}</h4>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;