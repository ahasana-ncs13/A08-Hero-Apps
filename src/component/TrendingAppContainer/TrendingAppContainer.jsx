import React from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const TrendingApp = ({trendingApps}) => {
    // console.log(trendingApps)
    const {image,title,downloads,ratingAvg}=trendingApps
    return (
        <Link to={`/appDetails/${trendingApps.id}`}>
        <div>
            <div className="card bg-base-100 shadow-sm">
  <figure className="px-5 pt-5">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className=" items-center text-center p-5">
    <h2 className="card-title font-medium text-xl mb-5 ">{title}</h2>
    <div className="flex justify-between">
      
      <button className="btn border-none rounded-2xl text-[#00D390] bg-[#F1F5E8]"><img src={downloadImg} alt="" className='w-5'  />{downloads}</button>

      <button className="btn border-none rounded-2xl text-[#FF8811] bg-[#FFF0E1]"> <img src={ratingImg} alt="" className='w-5' />{ratingAvg}</button>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default TrendingApp;