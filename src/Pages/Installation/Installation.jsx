import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeStoredApp } from '../../Utilities/Utilities';
import InstalledApp from '../../component/InstalledApp/InstalledApp';
import { toast } from 'react-toastify';

const Installation = () => {

    const [myInstallation, setMyInstallation]=useState([])
    const [sortBy , setSortBy]=useState('')

    const data = useLoaderData();
    // console.log(myInstallation)
    useEffect(()=>{
        const storesApp = getStoredApp()
        const convertedStoredapp = storesApp.map(id => parseInt(id))
        const installedApp = data.filter(app=>convertedStoredapp.includes(app.id))
        setMyInstallation(installedApp)
        
    },[])


    const handleSort = (order)=>{
        setSortBy(order)
        if(order === "High-Low"){
            const sortedbyHighLow = [...myInstallation].sort((a, b) => parseInt(b.downloads)-parseInt(a.downloads) )
            setMyInstallation(sortedbyHighLow)
        }
        if(order === "Low-High"){
            const sortedbyLowHigh = [...myInstallation].sort((a, b) => parseInt(a.downloads)-parseInt(b.downloads) )
            setMyInstallation(sortedbyLowHigh)
        }
    }


    const UninstallApp =(id)=>{
        // console.log(id)
        setMyInstallation(myInstallation.filter((ins)=> ins.id != id))
        removeStoredApp(id)
        toast("App is uninstalled")
    }

    return (
        <div className="bg-[#d2d2d230] pb-10">
        <div className='w-11/12 mx-auto'>
           <div className="text-center py-10 ">
             <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
             <p className='my-3'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className="flex justify-between items-center">
            <p>{myInstallation.length} Apps Found</p>

            <details className="dropdown">
  <summary className="btn m-1">Sort By download : {sortBy?sortBy:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleSort("High-Low")}><a>High-Low</a></li>
    <li onClick={()=>handleSort("Low-High")}><a>Low-High</a></li>
  </ul>
</details>
           </div>

        </div>

{
    myInstallation.map(p=><InstalledApp UninstallApp={UninstallApp} key={p.id} p={p}></InstalledApp>)
}

        </div>
    );
};

export default Installation;