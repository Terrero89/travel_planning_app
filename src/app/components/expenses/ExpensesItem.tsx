
"use client"

import { Expenses, Places, Trips } from '../../../../types/trips';
// import { useTripsStore } from '@/app/stores/useStore';


interface ExpensesProps {
    expensesList: Expenses[]
}


const CityItem: React.FC<ExpensesProps> = ({ expensesList }) => {

    return (


        <div>
            <ul className=' '>
                {expensesList.map((trip) => (<li className='max-w-auto mx-auto ` border-2 rounded-md border-opacity-5 m-2 py-2 px-1' key={trip.id}>
                    <h3 className='text-base mx-3 my-1 font-semibold'>{trip.expense}</h3>
                    <div className='flex flex-row '>
                        <div className=' mx-2 px-1  auto-w h-auto '>
                            <h4 className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>Category: </span>  {trip.category}</h4>
                            <p className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>Date</span>  {trip.date}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Star Time:</span> {trip.startTime}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>End Time: </span> {trip.endTime}</p>
                            <div className='text-gray-50 '>

                            </div>
                            <h5 className='text-xs text-gray-300'><span className='text-xs text-white'>Duration: </span>  <span className='font-semibold'>{trip.duration} </span> hours</h5>

                        </div>

                        <div className='mx-2 px-1 '>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Location: </span>{trip.location}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Status:  </span>{trip.isCompleted ? "completed" : "Not completed"}</p>


                        </div>

                        <div className='px-1 text-xs'>
                            <p className='text-xs text-gray-300'> <span className='text-xs text-white'>Rating </span> {trip.placeRating} </p>
                            <button className='my-1'>See Details</button></div>

                    </div>

                </li>))}
            </ul>
        </div>



    );
}

export default CityItem;


