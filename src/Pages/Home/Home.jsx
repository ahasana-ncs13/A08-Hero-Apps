import React from 'react';
import Banner from '../../component/Banner/Banner';
import { useLoaderData } from 'react-router';
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
      <div className=" grid grid-cols-4 gap-10 w-11/12 mx-auto py-20">
      {
        trendingAppData.map(trendingApps => <TrendingAppContainer key={trendingApps.id} trendingApps={trendingApps} ></TrendingAppContainer>)
      }
      </div>
      </div>
    );
};

export default Home;