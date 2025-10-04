import React from 'react';

const DesktopSideArt = () => {
  const leftNodes = [
    "Professional Profiles",
    "Industry Insights", 
    "Verified Connections",
    "Collaborative Spaces",
    "Localized Content"
  ];

  const rightNodes = [
    "Growth",
    "Innovation",
    "Opportunity", 
    "Mentorship",
    "Exclusivity"
  ];

  return (
    <>
      <div className="desktop-side-art left">
        {leftNodes.map((node, index) => (
          <div key={index} className="network-node">{node}</div>
        ))}
      </div>

      <div className="desktop-side-art right">
        {rightNodes.map((node, index) => (
          <div key={index} className="network-node">{node}</div>
        ))}
      </div>
    </>
  );
};

export default DesktopSideArt;