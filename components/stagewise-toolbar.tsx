'use client';

import { useEffect, useState } from 'react';

// Flag to track if toolbar has been initialized
let isToolbarInitialized = false;

export function StagewiseToolbar() {
  // Use state to ensure this component only runs on client side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only initialize in development mode, on client side, and if not already initialized
    if (isMounted && process.env.NODE_ENV === 'development' && !isToolbarInitialized) {
      // Dynamically import the toolbar to avoid SSR issues
      import('@stagewise/toolbar')
        .then(({ initToolbar }) => {
          try {
            const stagewiseConfig = {
              plugins: []
            };
            
            initToolbar(stagewiseConfig);
            isToolbarInitialized = true;
          } catch (error) {
            console.warn('Stagewise toolbar initialization error:', error);
          }
        })
        .catch((error) => {
          console.warn('Failed to load Stagewise toolbar:', error);
        });
    }
  }, [isMounted]);
  
  // This component doesn't render anything visible
  return null;
}
