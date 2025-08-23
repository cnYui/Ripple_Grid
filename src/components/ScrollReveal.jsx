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

    // Function to recursively process text nodes and wrap words
    const processTextNodes = (element) => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      
      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        if (node.textContent.trim()) {
          textNodes.push(node);
        }
      }
      
      textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const words = text.split(/\s+/).filter(word => word.length > 0);
        
        if (words.length > 1) {
          const fragment = document.createDocumentFragment();
          
          words.forEach((word, index) => {
            const span = document.createElement('span');
            span.className = 'word';
            span.style.opacity = baseOpacity;
            if (enableBlur) {
              span.style.filter = `blur(${blurStrength}px)`;
            }
            span.textContent = word;
            fragment.appendChild(span);
            
            // Add space between words (except for the last word)
            if (index < words.length - 1) {
              fragment.appendChild(document.createTextNode(' '));
            }
          });
          
          textNode.parentNode.replaceChild(fragment, textNode);
        } else if (words.length === 1) {
          // Single word, wrap it
          const span = document.createElement('span');
          span.className = 'word';
          span.style.opacity = baseOpacity;
          if (enableBlur) {
            span.style.filter = `blur(${blurStrength}px)`;
          }
          span.textContent = words[0];
          textNode.parentNode.replaceChild(span, textNode);
        }
      });
    };

    // Process all text nodes in the element
    processTextNodes(textElement);
    
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