import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id}=useParams()
    const data = useLoaderData()
    const idN = parseInt(id)
    const app = data.find((appData)=> appData.id === idN )
    console.log(app)
    const {image,companyName,description,downloads,ratingAvg
,ratings,reviews,size,title} = app

    return (
        <div>
            
        </div>
    );
};

export default AppDetails;