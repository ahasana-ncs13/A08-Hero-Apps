import React from 'react';
import Banner from '../../component/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import TrendingAppContainer from '../../component/TrendingAppContainer/TrendingAppContainer';

const Home = () => {
  const trendingAppData = useLoaderData()
    // console.log(trendingAppData)
    return (
    <div className="bg-[#d2d2d230]">
      <Banner></Banner>

      <div className=" text-center mt-20 ">
        <h1 className='text-5xl font-bold'>Trending Apps</h1>
        <p className='my-3'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-10 w-11/12 mx-auto py-20">
      {
        trendingAppData.map(Apps => <TrendingAppContainer key={Apps.id} Apps={Apps} ></TrendingAppContainer>)
      }
      </div>

 <Link to='/allApps'>
<div className="flex justify-center ">
     
      <button className="btn  text-white bg-linear-to-l from-[#632EE3] to-[#9F62F2] rounded-lg mb-10 w-[20%] ">Show All</button>
      
</div>
</Link>
      </div>
    );
};

export default Home;