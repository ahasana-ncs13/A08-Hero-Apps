import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const InstalledApp = ({p}) => {
     const {image,downloads,ratingAvg,size,title} = p

    return (
        <div className='w-11/12 mx-auto '>
            <div className="card card-side bg-base-100 shadow-sm mt-5 border border-gray-200">
  <figure>
    <img
      src={image}
      alt="Movie" className='p-5 mx-auto h-30'/>
  </figure>
  <div className="card-body">
     <div className="flex justify-between items-center">
        <div className="">
                <h1 className='text-2xl font-bold '>{title}</h1>
                <div className="flex mt-5 ">
                    <p className='text-[#00D390] flex items-center mr-5 gap-1'><FiDownload />{downloads}</p>
                    <p className='text-[#FF8811] flex items-center gap-1 mr-5'><FaStar />{ratingAvg}</p>
                    <p className='text-[#D9D9D9]' >{size} MB</p>
                </div>
        </div>
                <div className="mt-3">
                 
                    <button className='border-none  btn  mr-5 bg-[#00D390] text-white'>Uninstall</button>
                </div>
            </div>
  </div>
</div>
        </div>
    );
};

export default InstalledApp;