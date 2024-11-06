import React from 'react';
export default function InputText(props) {
  return (
    <div className="grid grid-cols-3 w-96">
      <label htmlFor={props.id} className="text-left">
        {props.labelText}
      </label>
      <input
        required={props.required}
        ㅊ
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeHolder}
        className="col-span-2 rounded-md border-2 p-1 h-10 border-black dark:text-black"
      />
    </div>
  );
}
