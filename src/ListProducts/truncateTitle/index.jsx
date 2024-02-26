import React from 'react';

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <>{text}</>;
  }

  const truncatedText = text.slice(0, maxLength) + '...';

  return <>{truncatedText}</>;
};

export default TruncateText;
