import React from 'react';
import api from '../../_api/api';

export default function SocialLoginButton(props) {
  return (
    <div>
      <a href={props.provider}>
        <button
          className={`mt-1 inline-flex items-center justify-center whitespace-nowrap rounded-md ${props.bgColor} text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6`}>
          <span className="mr-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox={props.viewBox}
              enableBackground={props.enableBackground}
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              {props.path}
            </svg>
          </span>
          <span>{props.text}</span>
        </button>
      </a>
    </div>
  );
}
