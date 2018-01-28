import React from 'react';
import VideoListItem from './video-list-item';


const VideoList = (props) => {
  const VideoListItems = props.videos.map((video) => {
    return <VideoListItem
    onSelectVideo={props.onSelectVideo}
    key={video.etag}
    video={video}
    />
  })
  return (
    <div className="col-md-4">
      <ul>
        {VideoListItems}
      </ul>
    </div>
  );
}

export default VideoList;
