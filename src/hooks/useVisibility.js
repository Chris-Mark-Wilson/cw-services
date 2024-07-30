import { useState, useEffect, useRef } from 'react';
import React from 'react';
const useVisibility = (elements) => {
  
  const [visibleArray, setVisibleArray] = useState(new Array(elements.length).fill(false));
  const refArray = useRef(elements.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleArray((prev) => {
            const newVisibleArray = [...prev];
            newVisibleArray[index] = true;
            return newVisibleArray;
          });
        }
      });
    });

    refArray.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refArray.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elements]);

  return { refArray, visibleArray };
};

export default useVisibility;