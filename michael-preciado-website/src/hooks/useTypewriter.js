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

    // Only start the interval if the text isn't fully displayed yet
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
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