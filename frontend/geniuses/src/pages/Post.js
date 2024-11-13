import React from 'react';
import PostTable from '../components/post/PostTable'

export default function Post() {
    return (
        <div className="flex flex-row gap-4" style={{'margin-inline': '301px', 'justify-content': 'safe center'}}>
            <div style={{flex: 3, minWidth: 996}}>
                <PostTable></PostTable>
            </div>
            {/*<div className="bg-red-300" style={{flex: 1, minWidth: 325}}>*/}
            {/*    sub*/}
            {/*</div>*/}
        </div>
    );
}