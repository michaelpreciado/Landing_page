import { useState, useEffect, useCallback, useRef } from 'react';

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
  scrambleOnMount = true,
  scrambleDuration = 1000
} = {}) {
  const [displayText, setDisplayText] = useState('');
  const requestRef = useRef();
  const lastTimeRef = useRef();
  const startTimeRef = useRef();
  
  // Mobile and performance optimizations
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Adjust settings for mobile performance
  const optimizedSpeed = isMobile ? Math.max(speed * 0.5, 20) : speed;
  const optimizedScrambleDuration = isMobile ? scrambleDuration * 0.5 : scrambleDuration;
  const shouldScramble = scrambleOnMount && !prefersReducedMotion && !isMobile;

  const animate = useCallback((time) => {
    // Skip animation entirely if user prefers reduced motion
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }
    
    if (lastTimeRef.current === undefined) {
      lastTimeRef.current = time;
    }

    if (startTimeRef.current === undefined) {
      startTimeRef.current = time;
    }

    const elapsedFromStart = time - startTimeRef.current;
    const elapsedFromLast = time - lastTimeRef.current;

    if (elapsedFromLast > optimizedSpeed) {
      lastTimeRef.current = time;

      if (shouldScramble) {
        const progress = Math.min(elapsedFromStart / optimizedScrambleDuration, 1);
        const nextText = Array.from(text).map((char, index) => {
          if (progress * text.length > index) {
            return char;
          }
          return getRandomChar(char);
        }).join('');
        setDisplayText(nextText);

        if (progress >= 1) {
          return; // Stop animation
        }
      } else {
        const currentIndex = Math.floor(elapsedFromStart / optimizedSpeed);
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
        } else {
          setDisplayText(text);
          return; // Stop animation
        }
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [text, optimizedSpeed, shouldScramble, optimizedScrambleDuration, prefersReducedMotion]);

  useEffect(() => {
    if (text) {
      startTimeRef.current = undefined;
      lastTimeRef.current = undefined;
      setDisplayText('');
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [text, animate]);

  return displayText;
}

export default useTypewriter;
