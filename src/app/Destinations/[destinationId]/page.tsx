import CityItem from '@/app/components/cities/CityItem';
import CityList from '@/app/components/cities/CityList';
import DestinationList from '@/app/components/destination/DestinationList';
import router from 'next/router';
import React from 'react'

interface Props { }

const destinationPage = () => {
    const { destinationId } = router.query;
    return <div>


        <h3>DESTINATION BY ID</h3>
        <div>DESTINATION BY ID</div>
        <CityItem cityList={[]} />
    </div>
}

export default destinationPage;