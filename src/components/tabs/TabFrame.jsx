import React from 'react';
import './TabFrame.css';

export const TabFrame = ({ data }) => {
  return (
    <div className="tab-frame">
      <span>Tab Iframe here</span>
      <iframe className="guitar-tab-frame" title="guitar-tab-frame" src="https://www.guitartabs.cc/tabs/v/vampire_weekend/step_tab.html" height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};