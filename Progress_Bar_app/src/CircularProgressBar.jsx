import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ percentage }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-container">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="progress-ring"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff416c" />
            <stop offset="100%" stopColor="#9932cc" />
          </linearGradient>
        </defs>
        <circle
          className="progress-ring__background"
          stroke="#e6e6e6"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring__circle"
          stroke="url(#gradient)"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
