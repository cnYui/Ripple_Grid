import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    
    if (!container || !textElement) return;

    // Split text into words
    const text = typeof children === 'string' ? children : textElement.textContent;
    const words = text.split(' ');
    
    // Create word spans
    const wordSpans = words.map((word, index) => {
      return `<span class="word" style="opacity: ${baseOpacity}; ${enableBlur ? `filter: blur(${blurStrength}px);` : ''}">${word}</span>`;
    }).join(' ');
    
    textElement.innerHTML = wordSpans;
    
    // Get all word elements
    const wordElements = textElement.querySelectorAll('.word');
    
    // Set initial container rotation
    gsap.set(container, { rotation: baseRotation });
    
    // Container rotation animation
    gsap.to(container, {
      rotation: 0,
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: rotationEnd,
        scrub: true,
        scroller: scrollContainerRef?.current || window
      }
    });
    
    // Word animations
    wordElements.forEach((word, index) => {
      gsap.to(word, {
        opacity: 1,
        filter: enableBlur ? 'blur(0px)' : 'none',
        scrollTrigger: {
          trigger: word,
          start: 'top bottom',
          end: wordAnimationEnd,
          scrub: true,
          scroller: scrollContainerRef?.current || window
        }
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container || 
            Array.from(wordElements).includes(trigger.trigger)) {
          trigger.kill();
        }
      });
    };
  }, [children, scrollContainerRef, enableBlur, baseOpacity, baseRotation, blurStrength, rotationEnd, wordAnimationEnd]);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal ${containerClassName}`}
    >
      <div 
        ref={textRef} 
        className={`scroll-reveal-text ${textClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;