import React from "react";

export default function PostTablePagination({pageLength = 1, activePage = 1, onUpdateActivePage}) {

    const onClickPage = pageNumber => {
        if (pageNumber > 0 & pageNumber < pageLength + 1) {
            onUpdateActivePage(pageNumber)
        }
    }

    return (
        <nav className="mt-5 flex items-center justify-center text-sm">
            <ul className="list-style-none flex">
                <li>
                    <a
                        onClick={() => onClickPage(activePage - 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#!"
                    >
                        Previous
                    </a>
                </li>
                {Array.from({length: pageLength}, (_, i) => (
                    <li>
                        <a
                            onClick={() => onClickPage(i + 1)}
                            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ${activePage === i + 1 ? 'bg-red-100' : ''}`}
                            href="#!"
                        >
                            {i + 1}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        onClick={() => onClickPage(activePage + 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#!"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}