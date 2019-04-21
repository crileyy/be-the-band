import React from 'react';
import './TabFrame.css';

export const TabFrame = () => {
  return (
    <div className="tab-frame">
      <span>Tab Iframe here</span>
      <iframe title="guitar-tab-frame" src="https://www.guitartabs.cc/tabs/v/vampire_weekend/step_tab.html" width="700" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};