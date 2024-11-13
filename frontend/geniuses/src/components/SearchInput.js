import React from "react";

export default function SearchInput() {
    return (
        <div className="relative m-[2px] mb-3 mr-5 float-left">
            <label htmlFor="inputSearch" className="sr-only">Search </label>
            <input id="inputSearch" type="text" placeholder="제목 검색"
                   className="block w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"/>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    </span>
        </div>
    )
}