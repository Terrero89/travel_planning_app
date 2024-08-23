
"use client"

import { Places, Trips } from '../../../../types/trips';
// import { useTripsStore } from '@/app/stores/useStore';


interface CityProps{
   cityList: Places[]
}


const CityItem: React.FC<CityProps> = ({cityList}) => {
 
    return (
        <div className=" content-center my-2 p-2 mx-">
            <div className=" content-center"> {cityList.map((place: Places) => (<h3>{place.city}</h3> ))} </div>
        </div>


    );
}

export default CityItem;

