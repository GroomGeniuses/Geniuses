import React, {useMemo, useState} from 'react';
import PostTableHeader from './PostTableHeader.js'
import PostTableBody from "./PostTableBody";
import ButtonGroup from "../ButtonGroup";
import PostListTable from "./PostListTable";
import SearchInput from "../SearchInput";
import PostTablePagination from "./PostTablePagination";

const headers = [{display: '제목', name: 'title'}, {display: '작성자', name: 'author'}, {
    display: '작성일',
    name: 'write_at'
}, {display: '조회', name: 'views'}, {display: '관심', name: 'interests'}, {display: '지원', name: 'applicants'}]

const items = [{
    id: '1',
    title: '더 지니어스: 게임의 법칙',
    author: '정종연',
    write_at: '2013.04.26',
    views: 1,
    interests: 0,
    applicants: 13
}, {id: '2', title: '더 지니어스: 룰 브레이커', author: '정종연', write_at: '2013.12.7', views: 1, interests: 0, applicants: 13}, {id: '3', title: '더 지니어스: 블랙 가넷', author: '정종연', write_at: '2014.10.1', views: 1, interests: 0, applicants: 13}, {id: '4', title: '더 지니어스: 그랜드 파이널', author: '정종연', write_at: '2015.6.27', views: 1, interests: 0, applicants: 13}]

function WriteButton() {
    return (
        <a
            href="post/write"
            className={'inline-block rounded border-2 border-red-100 px-3 pb-[6px] pt-2 transition duration-150 ease-in-out hover:border-red-200 hover:bg-red-50/50 focus:border-red-200 focus:bg-red-50/50 focus:ring-0 active:border-red-200 active:bg-red-50 motion-reduce:transition-none cursor-pointer'}>
            글쓰기
        </a>
    )
}


export default function PostTable(props) {

    const [pageSize, setPageSize] = useState(10);
    const [numberOfItem, setNumberOfItem] = useState(17)

    const pageLength = useMemo(()=>{
        return Math.ceil(numberOfItem / pageSize)
    })
    const [activePage, setActivePage] = useState(2)

    return (
        <div className="overflow-x-auto bg-white dark:bg-neutral-700">

            <div className="flex justify-between items-start">
                {/*<SearchInput></SearchInput>*/}
                <div></div>
                <div>
                    {/*<ButtonGroup></ButtonGroup>*/}
                    <WriteButton></WriteButton>
                </div>
            </div>

            <PostListTable items={items} headers={headers}></PostListTable>
            <PostTablePagination pageLength={pageLength} activePage={activePage} onUpdateActivePage={setActivePage}>
            </PostTablePagination>
        </div>
    )
}