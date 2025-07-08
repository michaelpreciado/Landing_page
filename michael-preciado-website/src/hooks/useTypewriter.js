import { useState, useEffect, useCallback } from 'react';

// A mapping of characters to their "typo" equivalents
const typoMap = {
  a: ['a', 'q', 's', 'z'],
  b: ['b', 'v', 'g', 'h', 'n'],
  c: ['c', 'x', 'd', 'f', 'v'],
  d: ['d', 's', 'e', 'f', 'c'],
  e: ['e', 'w', 's', 'd', 'r'],
  f: ['f', 'd', 'r', 'g', 'v'],
  g: ['g', 'f', 't', 'h', 'b'],
  h: ['h', 'g', 'y', 'j', 'n'],
  i: ['i', 'u', 'j', 'k', 'o'],
  j: ['j', 'h', 'u', 'k', 'm'],
  k: ['k', 'j', 'i', 'l', 'm'],
  l: ['l', 'k', 'o', 'p'],
  m: ['m', 'n', 'j', 'k'],
  n: ['n', 'b', 'h', 'j', 'm'],
  o: ['o', 'i', 'k', 'l', 'p'],
  p: ['p', 'o', 'l'],
  q: ['q', 'w', 'a'],
  r: ['r', 'e', 'd', 'f', 't'],
  s: ['s', 'a', 'w', 'd', 'x', 'z'],
  t: ['t', 'r', 'f', 'g', 'y'],
  u: ['u', 'y', 'h', 'j', 'i'],
  v: ['v', 'c', 'f', 'g', 'b'],
  w: ['w', 'q', 'a', 's', 'e'],
  x: ['x', 'z', 's', 'd', 'c'],
  y: ['y', 't', 'g', 'h', 'u'],
  z: ['z', 'a', 's', 'x'],
  ' ': [' '],
};

const getRandomChar = (char) => {
  const lowerChar = char.toLowerCase();
  if (typoMap[lowerChar]) {
    const typos = typoMap[lowerChar];
    return typos[Math.floor(Math.random() * typos.length)];
  }
  return char;
};

function useTypewriter(text, {
  speed = 50,
  scrambleOnMount = true, // Enable scrambling by default
  scrambleChance = 0.4,   // Chance to scramble each character
  scrambleDuration = 1000 // Total time for the scramble effect
} = {}) {
  const [displayText, setDisplayText] = useState('');

  const scrambleText = useCallback((targetText) => {
    let scrambled = Array.from(targetText).map(() => getRandomChar(' ')).join('');
    setDisplayText(scrambled);

    const startTime = Date.now();
    let intervalId;

    const updateScramble = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / scrambleDuration;

      if (progress >= 1) {
        setDisplayText(targetText);
        clearInterval(intervalId);
        return;
      }

      const nextText = Array.from(targetText).map((char, index) => {
        if (progress * targetText.length > index) {
          return char;
        }
        return getRandomChar(char);
      }).join('');

      setDisplayText(nextText);
    };

    intervalId = setInterval(updateScramble, speed);
    return () => clearInterval(intervalId);
  }, [scrambleDuration, speed]);

  useEffect(() => {
    if (!text) {
      setDisplayText('');
      return;
    }

    if (scrambleOnMount) {
      const clearScramble = scrambleText(text);
      return clearScramble;
    } else {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [text, speed, scrambleOnMount, scrambleText]);

  return displayText;
}

export default useTypewriter;
