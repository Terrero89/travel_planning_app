"use client"

import CityList from '@/app/components/cities/CityList';
import {useParams}from 'next/navigation';
import React from 'react'


const citiesPage = () => {
  const params = useParams()
  
  return <div>
<h1>ID: {params.destinationId}</h1>
    <h3>LIST of all cities based on destination</h3>
    <div>
      <CityList />
      <h1>ID: {params.destinationId}</h1>
    </div>
  </div>
}

export default citiesPage;