"use client"



import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTripsStore } from '../../stores/useStore';
import CityItem from '@/app/components/cities/CityItem';
import mockData from '../../../../public/MockedData.json'
import { Places, Trips } from '../../../../types/trips';


const DestinationPage = () => {
    const [trips, setTrips] = useState<Trips[]>(mockData as Trips[]);
    const [cities, setCities] = useState<Places[]>([]);
    const params = useParams()

    const fix = () => {
        const byId = trips.filter((trip: any) => trip.destinationID === params.destinationId);

        return byId
    }

    useEffect(() => {
        const destinationById = trips.find((trip) => trip.destinationID === params.destinationId);

        if (destinationById) {
            setCities(destinationById.places);
        }
    }, [params.destinationId, trips]);
    return <div>
        <a>PARAM: {params.destinationId}</a>
        <CityItem cityList={cities} />

    </div>

}

    export default DestinationPage;

