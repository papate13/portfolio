import React, { useState, useEffect, useRef } from 'react';
import './VideoBackground.css'; 
import backgroundVideo from './assets/video/BackgroundVideo.mp4';
import backgroundAudio from './assets/audio/BackgroundAudio.mp3';

const VideoBackground = () => {
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && !isAudioMuted) {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
    }
  }, [isAudioMuted]);

  const toggleAudioMute = () => {
    setIsAudioMuted(!isAudioMuted);
  };

  return (
    <div className="video-container">
      <video muted autoPlay loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <audio ref={audioRef} loop muted={isAudioMuted}>
        <source src={backgroundAudio} type="audio/mp3" />
      </audio>
      <div className="video-controls">
        <button id="mutebtn" onClick={toggleAudioMute}>
          <i className={`fas ${isAudioMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;