// Video Player Controller

// Imagine we’re building a YouTube-like video player where we want to pause, 
// play, and track the video progress without unnecessary renders. 
// Here’s how we do it:
import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null); // Reference to video DOM node
  const progressRef = useRef(0); // Persistent state without causing renders
  const [isPlaying, setIsPlaying] = useState(false); // UI state

  // Play or Pause Video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Track Progress
  const trackProgress = () => {
    if (videoRef.current) {
      progressRef.current = videoRef.current.currentTime;
      console.log('Current Progress:', progressRef.current);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onTimeUpdate={trackProgress}
      ></video>
      <div>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;