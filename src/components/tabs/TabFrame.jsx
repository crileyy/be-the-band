import React from 'react';
import './TabFrame.css';

export const TabFrame = ({ data }) => {

  const tabFrame = () => {
    if (Object.keys(data).length === 0) {
      return null;
    } else {
      return 'https://www.guitartabsexplorer.com/' + data.data.track.artists[0].name.split(' ').join('-') + '-Tabs' + '/' + data.data.track.name.split(' ').join('-') + '-tab.html';
    }
  }

  return (
    <div className="tab-frame">
      <span>Tab Iframe here</span>
      <iframe className="guitar-tab-frame" title="guitar-tab-frame" src={tabFrame()} height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};