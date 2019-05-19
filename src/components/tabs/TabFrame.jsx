import React from 'react';
import './TabFrame.css';

export const TabFrame = ({ data }) => {

// TODO replace tab frame with https://www.songsterr.com/a/wa/api in a button that opens in a new window
// create a drop down menu with another option for a google search for tabs
// TODO: multiple links instead of iframe since iframes aren't allowed

  const tabFrame = () => {
    if (Object.keys(data).length === 0) {
      return null;
    } else {
      //return 'https://www.guitartabsexplorer.com/' + data.data.track.artists[0].name.split(' ').join('-') + '-Tabs' + '/' + data.data.track.name.split(' ').join('-') + '-tab.html';
      return 'https://www.songsterr.com/a/wsa/oasis-wonderwall-tab-s2t4';
    }
  }

  const songsterLink = () => {
    if (Object.keys(data).length === 0) {
      return 'null';
    } else {
      //return 'https://www.guitartabsexplorer.com/' + data.data.track.artists[0].name.split(' ').join('-') + '-Tabs' + '/' + data.data.track.name.split(' ').join('-') + '-tab.html';
      console.log('http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + data.data.track.name.split(' ').join('+') + '&a=' + data.data.track.artists[0].name.split(' ').join('+'));
      return 'http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + data.data.track.name.split(' ').join('+') + '&a=' + data.data.track.artists[0].name.split(' ').join('+');
    }
  };

  return (
    <div className="tab-frame">
      <span>Tab Iframe here</span>
      <iframe className="guitar-tab-frame" title="guitar-tab-frame" src={tabFrame()} height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <a className="songster-link" style={{display: "table-cell"}} href={Object.keys(data).length === 0 || data.data.track ===  null ? '' : 'http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + data.data.track.name.split(' ').join('+') + '&a=' + data.data.track.artists[0].name.split(' ').join('+')} target="_blank">Songsterr Tab</a>
      <a className="google-link" style={{display: "table-cell"}} href={Object.keys(data).length === 0 || data.data.track ===  null ? '' : 'https://www.google.com/search?q=' + data.data.track.name + ' ' + data.data.track.artists[0].name + ' tab'} target="_blank">Google search for Tab</a>
    </div>
  );
};