import React from 'react';

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <span
        className={`tab mx-2 cursor-pointer ${activeTab === '작성한 글' ? 'font-bold underline' : ''}`}
        onClick={() => onTabClick('작성한 글')}
      >
        작성한 글
      </span>
      <span
        className={`tab mx-2 cursor-pointer ${activeTab === '신청한 글' ? 'font-bold underline' : ''}`}
        onClick={() => onTabClick('신청한 글')}
      >
        신청한 글
      </span>
    </div>
  );
};

export default Tabs;
