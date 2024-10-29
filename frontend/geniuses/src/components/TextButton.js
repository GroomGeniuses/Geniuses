import React from 'react';
export default function TextButton(props) {
  return (
    <button
      type={props.type}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      className="rounded-md m-1 p-1 text-sm bg-black text-white dark:bg-white dark:text-black">
      {props.text}
    </button>
  );
}
