import React from 'react'   
import {
    useGetAllLocationsQuery,
  } from "../redux/api/location";
  import LocationCard from "../components/LocationCard";
  import { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";

function Timeline() {

    const { data,refetch } = useGetAllLocationsQuery();

    useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className='flex flex-wrap flex-raw gap-8'>
        {
            data?.map((Location,index)=>{
                console.log(Location)
                return(
                    <LocationCard key = {Location._id} data = {Location}/>

                )
            })
        }
    </div>
  )
}

export default Timeline