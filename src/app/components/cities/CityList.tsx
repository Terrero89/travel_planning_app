
"use client"

import { useTripsStore } from '@/app/stores/useStore';
import CityItem from './CityItem';
import { Places, Trips } from '../../../../types/trips';




const CityList: React.FC<{}> = ({ }) => {
    const places: Places[] = useTripsStore((state) =>
        state.trip.flatMap(trip => trip.places)
    );


    return (
        <div className="">
            <CityItem cityList={places} />

        </div>

    );
}

export default CityList;



