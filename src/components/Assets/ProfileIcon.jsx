import React from "react";

function ProfileIcon({ props }) {
  return (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M17 9A5 5 0 117 9a5 5 0 0110 0zm-2.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        clipRule="evenodd"
      ></path>
      <path stroke="#fff" strokeWidth="3" d="M5 22c0-7 13.5-7.5 13.5 0"></path>
      <rect
        width="21.5"
        height="21.5"
        x="1.25"
        y="1.25"
        stroke="#fff"
        strokeWidth="2.5"
        rx="3.75"
      ></rect>
    </svg>
  );
}

export default ProfileIcon;