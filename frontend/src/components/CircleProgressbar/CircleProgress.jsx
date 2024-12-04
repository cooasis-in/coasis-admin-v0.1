import React from "react";

const CircleProgress = ({ percentage, circleWidth }) => {
  const radius = 60;
  const dasharray = radius * 2 * Math.PI;
  const dashOffset = dasharray - (dasharray * percentage) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E1FF26" />
            <stop offset="100%" stopColor="#00FB87" />
          </linearGradient>
        </defs>
        
        
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="7px"
          r={radius}
          className="fill-none stroke-[#2D3536]" 
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="7px"
          r={radius}
          stroke="url(#gradient1)"
          className="fill-none"
          style={{
            strokeDasharray: dasharray, 
            strokeDashoffset: dashOffset, 
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`} 
        />
        
        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-medium text-2xl fill-[#E1FF26]"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
