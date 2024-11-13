import React from 'react';

export default function PostTableBody({items = []}) {
    return (
        <tbody>
        {items.map(item => (
            <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                {Object.keys(item).map(attr => attr === 'id' ? null : (
                    <td className="px-6 py-4"><a href={`post/${item.id}`}>{item[attr]}</a></td>))}
            </tr>
        ))}
        </tbody>
    )
}