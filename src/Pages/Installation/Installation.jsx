import React from 'react';

const Installation = () => {
    return (
        <div className="bg-[#d2d2d230]">
        <div className='w-11/12 mx-auto'>
           <div className="text-center py-10 ">
             <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
             <p className='my-3'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className="flex justify-between items-center">
            <p>1 Apps Found</p>

            <details className="dropdown">
  <summary className="btn m-1">Sort By Size</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>High-Low</a></li>
    <li><a>Low-High</a></li>
  </ul>
</details>
           </div>
        </div>
        </div>
    );
};

export default Installation;