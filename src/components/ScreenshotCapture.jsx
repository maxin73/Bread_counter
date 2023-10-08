import React, { useState } from 'react';
import * as htmlToImage from 'html-to-image';

const screenshotCapture = ({ screenshotRef }) => {
  const [screenshot, setScreenshot] = useState(null);

  const captureScreenshot = () => {
    htmlToImage.toPng(screenshotRef.current)
      .then((dataUrl) => {
        setScreenshot(dataUrl);
      })
      .catch((error) => {
        console.error('Error capturing screenshot:', error);
      });
  };

  return (
    <div>
      <button onClick={captureScreenshot} className="bg-sky-300 hover:bg-sky-500 m-5">Capture Screenshot</button>
      {screenshot && (
        <div className="mt-5">
          <h2 className="ml-5 font-bold">↓長押しタップで保存↓</h2>
          <img className="m-5 border" src={screenshot} alt="Captured Screenshot" />
        </div>
      )}
    </div>
  );
};

export default screenshotCapture;
