import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import rewiewsImg from '../../assets/icon-review.png'


import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { toast } from 'react-toastify';
import { getStoredApp, setAppToStored } from '../../Utilities/Utilities';



const AppDetails = () => {

    const {id}=useParams()
    const data = useLoaderData()
    const idN = parseInt(id)
    const app = data.find((appData)=> appData.id === idN )
    // console.log(app)
    const {image,companyName,description,downloads,ratingAvg
,ratings,reviews,size,title} = app

const dataC = ratings

let [ install , setInstall]= useState(() => getStoredApp().includes(id))

const handleInstall = (id)=>{
     setInstall(true)
    toast(" App installed successfully")
    setAppToStored(id)
}
// const setInstallApp = (id)=>{

// }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="card card-side bg-base-100 shadow-sm gap-10 my-10">
  <figure>
    <img
      src={image}
      alt="" className='w-70 p-5 bg-gray-200' />
  </figure>
  <div className="w-[75%]">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p>Developed by <span className='text-[#9F62F2] font-bold'>{companyName}</span></p>
     <div className="divider"></div>


    <div className="flex gap-15">
      <div className="">
        <img src={downloadImg} alt="" />
        <p className='my-2'>Downloads</p>
        <h2 className='text-3xl font-bold'>{downloads}</h2>
       </div>
      <div className="">
        <img src={ratingImg} alt="" />
        <p className='my-2'>Average Ratings</p>
        <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
       </div>
      <div className="">
        <img src={rewiewsImg} alt="" />
        <p className='my-2'>Total Reviews</p>
        <h2 className='text-3xl font-bold'>{reviews}</h2>
       </div>
    </div>
<button className="btn text-white bg-[#00D390] border-none mt-2" onClick={ ()=> handleInstall(id) } disabled={install} >{ !install ? "Install Now " : "Installed " } <span>( {size} MB)</span></button>

  </div>
  
  
           </div>

<div className="divider"></div>

    <div className="">
        <div className="w-full h-80 bg-white p-4 rounded-2xl shadow-md mb-20  pb-10">
       <h2 className='text-2xl font-bold'>Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataC}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" domain={[0, 13000]} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#ff8c00"
            barSize={25}
            radius={[0, 2, 2, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    </div>

<div className="divider"></div>

<div className=" mb-10">
    <h2 className='text-2xl font-bold mb-5'>Description</h2>
    <p >{description}</p>
</div>

        </div>
    );
};

export default AppDetails;