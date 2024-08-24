
"use client"

import { Places, Trips } from '../../../../types/trips';
// import { useTripsStore } from '@/app/stores/useStore';


interface CityProps {
    cityList: Places[]
}


const CityItem: React.FC<CityProps> = ({ cityList }) => {

    return (
        // <div className=" content-center my-2 p-2 mx-">
        //     <div className=" content-center"> {cityList.map((place: Places) => (<h3>{place.city}</h3> ))} </div>
        // </div>

        <div>
            <ul className=' '>
                {cityList.map((city) => (<li className=' cardBg max-w-auto mx-auto  rounded-sm border-opacity-5 m-2 py-2 px-1' key={city.cityID}>
                    <h3 className='text-base mx-3 my-1 font-semibold'>{city.city}</h3>
                    <div className='flex flex-row space-x-12  '>
                        <div className=' mx-2 px-1  auto-w h-auto '>
                            <h4 className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>From:</span>  {city.from}</h4>
                            <p className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>To:</span> city.to}</p>
                            <div className='text-gray-50 '>

                            </div>
                            <h5 className='text-xs text-gray-300'><span className='text-xs text-white'>Duration: </span>  <span className='font-semibold'>{city.duration} </span> {city.duration > 1 ? "days" : "day"}</h5>

                        </div>

                        <div className='mx-2 px-1 '>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>End Time: </span> {city.isThisCityVisited ? "Yes" : "No"}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Star Time:</span> {city.totalCost}</p>


                        </div>

                        <div className='px-1 text-xs'>
                            <p className='text-xs text-gray-300'> <span className='text-xs text-white'>Rating </span> {city.cityRating} </p>
                            <button className='my-1'>See Details</button></div>

                    </div>

                </li>))}
            </ul>
        </div>
    );
}

export default CityItem;

