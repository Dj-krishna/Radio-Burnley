import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import "../styles/MusicPlayer.css";
import logo from "../assets/radio-burnley.png";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(
    new Audio("https://streaming.broadcast.radio/ribblefm?1737297608617=")
  );

  useEffect(() => {
    const audioElement = audioRef.current;

    // Set initial volume
    audioElement.volume = volume;

    // Cleanup function
    return () => {
      audioElement.pause();
    };
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handlePrevious = () => {
    // Placeholder for previous functionality
    console.log("Previous track");
  };

  const handleNext = () => {
    // Placeholder for next functionality
    console.log("Next track");
  };

  return (
    <div className="music-player">
      <div className="player-content">
        <div className="station-info">
          <img src={logo} alt="Radio Station Logo" className="station-logo" />
          <div className="station-details">
            <h3>Radio Burnley</h3>
            <p>Live Stream</p>
          </div>
        </div>
        <div className="player-controls">
          <button
            className="control-button prev-button"
            onClick={handlePrevious}
          >
            <FaStepBackward />
          </button>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="control-button next-button" onClick={handleNext}>
            <FaStepForward />
          </button>
        </div>
        <div className="volume-control">
          <button className="volume-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
