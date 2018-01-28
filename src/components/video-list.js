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
    <ul>
      {VideoListItems}
    </ul>
  );
}

export default VideoList;
