import { useState } from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const copyClipBoard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="card" onClick={copyClipBoard}>
      {copied && (
        <div
          className="copied-message"
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Copied to clipboard
        </div>
      )}
      {copied ? (
        <img src={url} alt={title} style={{ filter: `brightness(50%)` }}></img>
      ) : (
        <img src={url} alt={title}></img>
      )}
    </div>
    // </li>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
