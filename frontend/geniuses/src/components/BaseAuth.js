import React from 'react';
export default function Base(props) {
  return (
    <div
      className="Home flex flex-col justify-center items-center
    bg-white h-[100vh] text-black dark:bg-black dark:text-white">
      {props.component}
    </div>
  );
}
