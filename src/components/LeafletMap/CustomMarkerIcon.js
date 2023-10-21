import React from 'react';
import { divIcon } from 'leaflet';

const CustomMarkerIcon = () => {
  const iconSize = [20, 20]; // Adjust the size as needed
  const backgroundColor = 'red'; // Change this to your desired color

  const iconHtml = `
    <div style="background-color: ${backgroundColor};" class="marker-color"></div>
  `;

  const customIcon = divIcon({
    className: 'custom-marker-icon',
    html: iconHtml,
    iconSize: iconSize,
  });

  return <div className="marker-wrapper">{customIcon}</div>;
};

export default CustomMarkerIcon;
