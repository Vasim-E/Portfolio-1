import { useState, useEffect, useRef } from 'react';

/**
 * Preload images for canvas sequence
 * @param frameCount Total number of frames in the sequence
 * @param getFramePath Function to construct the image path based on index
 * @returns { images, isLoaded, loadProgress, frameCount }
 */
export const useScrollSequence = (
  frameCount: number,
  getFramePath: (index: number) => string
) => {
  const imagesRef = useRef<HTMLImageElement[]>(Array(frameCount).fill(null));
  
  const [loadedCount, setLoadedCount] = useState(0);
  
  useEffect(() => {
    let unmounted = false;
    let localLoadedCount = 0;
    
    imagesRef.current = Array(frameCount).fill(null);
    setLoadedCount(0);
    
    for (let i = 0; i < frameCount; i++) {
        const img = new window.Image();
        img.src = getFramePath(i);
        
        img.onload = () => {
          if (unmounted) return;
          imagesRef.current[i] = img;
          localLoadedCount++;
          setLoadedCount(localLoadedCount);
        };
        
        img.onerror = () => {
            if (unmounted) return;
            localLoadedCount++;
            setLoadedCount(localLoadedCount);
        };
    }
    
    return () => { unmounted = true; };
  }, [frameCount, getFramePath]);

  // Only wait for the first few frames to create an initial seamless experience
  // while the rest continue loading in the background implicitly.
  const minimumFramesRequired = Math.min(5, frameCount);
  const isLoaded = loadedCount >= minimumFramesRequired && frameCount > 0;
  const loadProgress = frameCount > 0 ? (loadedCount / frameCount) * 100 : 0;

  return { 
    images: imagesRef.current, 
    isLoaded, 
    loadProgress,
    frameCount
  };
};
