import React from 'react';

const VideoListItem = ({video, onSelectVideo}) => {
  
  return (
    <div>
      <li className="list-group-item" onClick={() => onSelectVideo(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={video.snippet.thumbnails.default.url} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
       </li>
    </div>
  );
}

export default VideoListItem;
