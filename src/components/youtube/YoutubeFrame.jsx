import React from 'react';

export const YoutubeFrame = ({ data }) => {
  // TODO call youtube search API with user input (data) to generate YouTube video iframe
  // {//<iframe src="https://www.youtube.com/embed/results?search_query=the+strokes+is+this+it+guitar+tutorial+"></iframe>}

  return (
    <div>
      <a className="google-video-link" style={{ display: "table-cell" }} href={'https://www.google.com/search?q=' + data.data.track.name + ' ' + data.data.track.artists[0].name + ' tab' + '&tbm=vid'} target="_blank">Video search for tutorial</a>
    </div>
  );
};