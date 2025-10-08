import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TrendingAppContainer from '../../component/TrendingAppContainer/TrendingAppContainer';

const AllApps = () => {
    const [search, setSearch]=useState("")
    const data = useLoaderData()
    
    const handleSearch = (e) => {
     setSearch(e.target.value);
    }
    
    const filteredApps = data.filter(app =>
  app.title.toLowerCase().includes(search.toLowerCase())
);
   

    
    return (
        <div className="bg-[#d2d2d230]">
        <div className=' w-11/12 mx-auto'>
            <div className=" text-center py-10">
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='pt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between items-center py-5">
                <p className='font-bold'>({data.length}) Apps Found</p>
<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={handleSearch} type="Search" required placeholder="Search" />
</label>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-15">
            {
                filteredApps.length === 0 ? <p className='text-4xl font-bold text-center'> No App Found</p>       :         
                filteredApps.map(Apps=> <TrendingAppContainer key={Apps.id} Apps={Apps} ></TrendingAppContainer>)
            }
            </div>
        </div>
</div>        
    );
};

export default AllApps;