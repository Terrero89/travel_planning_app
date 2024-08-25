
"use client"

// import { useTripsStore } from '@/app/stores/useStore';
import Trips from '../../types/trips';
import { Accordion, AccordionItem } from '@nextui-org/react';

import Link from 'next/link'


interface DestionationProps {
    destinationList: Trips[]
}
const DestinationItem: React.FC<DestionationProps> = ({ destinationList }) => {

    return (
        <div>
            <h3>DESTINATION LIST</h3>
            <ul className=' '>

                {destinationList.map((trip) => (
                    <li className=' shadow-sm  cardBg max-w-auto mx-auto  rounded-sm border-opacity-5 m-2 py-2 px-1' key={trip.id} href={''}>
                        <h3 className=' text-base mx-3 my-1 font-semibold'>{trip.destination}</h3>
                        <Link href="/Destination/cities">
                            <div className='flex flex-row '>
                                <div className=' mx-2 px-1  auto-w h-auto '>
                                    <p className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>From: </span>  {trip.from}</p>
                                    <p className='text-xs text-gray-300'><span className='text-xs text-white'>To:</span> {trip.to}</p>
                                    <div className='text-gray-50 '>

                                    </div>
                                    <h5 className='text-xs text-gray-300'><span className='text-xs text-white'>Duration: </span>  <span className='font-semibold'>{trip.tripDuration} </span> days</h5>

                                </div>
                                <div className=' text-xs'>
                                    <p className='text-xs text-gray-300'> <span className='text-xs text-white'>Rating </span> {trip.tripRating} </p>
                                    <p className='text-xs text-gray-300'> <span className='text-xs text-white'>Cities </span> {trip.citiesIncludedOnTrip} </p>
                                    <button className='my-1'>See Cities</button></div>
                            </div>
                        </Link>
                        <Accordion className='text-white '>

                            <AccordionItem className="mx-1" key="1" aria-label="Accordion 1" title=<span className="text-white text-sm ">Details</span> >
                                <div className=''>
                                    <p className='text-xs text-gray-300'><span className='text-xs text-white'>Transportation: </span>{trip.transportType}</p>
                                    <p className='text-xs text-gray-300'><span className='text-xs text-white'>Trip Status: </span>{trip.isTripCompleted ? "Visited" : "Not visited yet"}</p>
                                    <p className='text-xs text-gray-300'><span className='text-xs text-white'>days Remaining </span>{trip.daysRemainingForTrip}</p>

                                </div>
                            </AccordionItem>

                        </Accordion>
                    </li>))}

            </ul>
        </div>

    );
}

export default DestinationItem;

