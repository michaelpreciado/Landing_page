import { useState, useEffect } from 'react';

function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset state if text is null or empty, or when text/speed changes
    if (!text) {
      setDisplayText('');
      setCurrentIndex(0);
      return;
    }

    // Parse text into chunks where HTML tags are treated as single units
    const parseTextIntoChunks = (inputText) => {
      const chunks = [];
      let i = 0;
      
      while (i < inputText.length) {
        // Check if we're at the start of an HTML tag
        if (inputText[i] === '<') {
          const tagEnd = inputText.indexOf('>', i);
          if (tagEnd !== -1) {
            // Add the entire HTML tag as one chunk
            chunks.push(inputText.substring(i, tagEnd + 1));
            i = tagEnd + 1;
          } else {
            // No closing >, treat as regular character
            chunks.push(inputText[i]);
            i++;
          }
        } else {
          // Regular character
          chunks.push(inputText[i]);
          i++;
        }
      }
      
      return chunks;
    };

    const chunks = parseTextIntoChunks(text);

    // Only start the interval if we haven't displayed all chunks yet
    if (currentIndex < chunks.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prev) => prev + chunks[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      // Clear interval if index reaches the end or component unmounts
      return () => clearInterval(intervalId);
    }
  }, [text, speed, currentIndex]); // Rerun effect if text, speed, or index changes

  // Effect to reset when text prop changes externally
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  return displayText;
}

export default useTypewriter; 