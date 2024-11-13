import React from "react";
import PostTableHeader from "./PostTableHeader";
import PostTableBody from "./PostTableBody";

export default function PostListTable({headers, items}) {
    return (
        <table className="min-w-full text-left text-sm whitespace-nowrap">
            <PostTableHeader headers={headers}></PostTableHeader>
            <PostTableBody items={items}></PostTableBody>
        </table>
    )
}