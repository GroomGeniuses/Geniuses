import React from 'react';

export default function PostTableHeader({headers = []}) {
    return (
        <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
        <tr>
            {headers.map(header => (
                <th key={header.name} scope="col" className="px-6 py-4">{header.display}</th>
            ))}
        </tr>
        </thead>
    )
}