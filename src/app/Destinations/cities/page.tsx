import CityList from '@/app/components/cities/CityList';
import router from 'next/router';
import React from 'react'


const citiesPage = () => {
  const { id } = router.query;
  return <div>

    <h3>LIST of all cities based on destination</h3>
    <div>
      <CityList />
      <h1>ID: {id}</h1>
    </div>
  </div>
}

export default citiesPage;