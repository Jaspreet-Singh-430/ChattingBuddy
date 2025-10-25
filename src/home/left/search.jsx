import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function Search() {
    return(
        <div className="h-[10vh]">
        <div className="px-6 py-4">
        <form action=''>
                <div className='flex space-x-3'>
            <label className="input w-[80%] border-[1px] rounded-lg bg-slate-900 text-white">
  
  <input className='grow outline-none' type="search" required placeholder="Search" />
</label>
<button>
<IoIosSearch className="p-2 text-5xl hover:bg-grey-600 round-full duration-300 text-white"/>
</button>
        </div>
</form>
</div>
</div>
    )
}