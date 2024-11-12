import React from "react";

export default function PostWrite() {
    return (
        <div
            className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false"
                   placeholder="제목" type="text"/>
            <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                      spellCheck="false" placeholder=""></textarea>

            <div className="m-2"></div>

            <div className="buttons flex">
                <a
                    className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"> 취소
                </a>
                <div
                    className="btn border border-red-200 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-red-400"> 등록
                </div>
            </div>
        </div>
    )
}