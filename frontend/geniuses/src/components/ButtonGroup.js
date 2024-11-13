import React, {useState} from 'react';
import ListRowIcon from '../resource/list_row.svg'
import ListBlockIcon from '../resource/list_block.svg'

export default function ButtonGroup() {

    const [activeButton, setActiveButton] = useState(1);


    return (
        <div className={"inline-flex"}>
            <button type="button"
                    onClick={()=> setActiveButton(1)}
                    className={`inline-block rounded-s border-2 border-red-100 px-3 pb-[6px] pt-2 transition duration-150 ease-in-out hover:border-red-200 hover:bg-red-50/50 focus:border-red-200 focus:bg-red-50/50 focus:ring-0 active:border-red-200 active:bg-red-50 motion-reduce:transition-none ${activeButton === 1 ? 'bg-red-50/50 border-red-200' : ''}`}>
                <img className="w-5 h-5" src={ListRowIcon} alt="list row icon"/>
            </button>
            <button type="button"
                    onClick={()=> setActiveButton(2)}
                    className={`-ms-0.5 inline-block rounded-e border-2 border-red-100 px-3 pb-[6px] pt-2 transition duration-150 ease-in-out hover:border-red-200 hover:bg-red-50/50 focus:border-red-200 focus:bg-red-50/50 focus:ring-0 active:border-red-200 active:bg-red-50 motion-reduce:transition-none ${activeButton === 2 ? 'bg-red-50/50 border-red-200' : ''}`}>
                <img className="w-5 h-5" src={ListBlockIcon} alt="list block icon"/>
            </button>
        </div>
    )
}