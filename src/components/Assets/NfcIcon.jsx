import React from "react";

function NfcIcon({props}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.75 22A3.75 3.75 0 017 18.25V4.5l6.25 6.25"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.25 2A3.75 3.75 0 0117 5.75V19.5l-6.25-6.25"
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M18.25 2H5.75A3.75 3.75 0 002 5.75v12.5A3.75 3.75 0 005.75 22h12.5A3.75 3.75 0 0022 18.25V5.75A3.75 3.75 0 0018.25 2z"
    ></path>
  </svg>
  );
}

export default NfcIcon;