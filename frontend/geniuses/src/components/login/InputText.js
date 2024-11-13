import React from 'react';
export default function InputText(props) {
  return (
    <div className="grid grid-cols-1 w-80">
      <label htmlFor={props.id} className="text-left">
        {props.id.toUpperCase()}
      </label>
      <input required type={props.type} id={props.id} name={props.id} placeholder={props.placeHolder} className="rounded-md border-2 p-1 h-10 border-black dark:text-black" />
    </div>
  );
}
