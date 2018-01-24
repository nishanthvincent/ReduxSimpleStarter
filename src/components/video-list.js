import React from 'react';
import VideoListItem from './video-list-item';


const VideoList = (props) => {
  console.log('props--->', props);
  const VideoListItems = props.videos.map((video) => {
    return <VideoListItem video={video}/>
  })
  return (
    <ul>
      {VideoListItems}
    </ul>
  );
}

export default VideoList;
