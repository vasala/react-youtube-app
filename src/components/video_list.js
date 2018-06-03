import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="list-group col-md-4">
                {this.props.videos.map((vid) => <VideoListItem vidSelectCall={this.props.onVideoSelect} video={vid} key={vid.etag} />)}
            </ul>
        );
    }
}

// refactored code
// export default class VideoList = (props) => {
//     const videoItems = props.videos.map((vid) => <VideoListItem video={vid} key={video.etag} />);
//     return (
//         <ul className="list-group-col-md-4">
//             {videoItems}
//         </ul>
//     );
// }


