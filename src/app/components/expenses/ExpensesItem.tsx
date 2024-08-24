
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
                {expensesList.map((expense) => (<li className=' cardBg max-w-auto mx-auto `  rounded-sm border-opacity-0 m-2 py-2 px-1' key={expense.expenseID}>
                    <h3 className=' text-base mx-3 my-1 font-semibold'>{expense.expense}</h3>
                    <div className='flex flex-row '>
                        <div className=' mx-2 px-1  auto-w h-auto '>
                            <h4 className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>Category: </span>  {expense.category}</h4>
                            <p className='font-medium text-xs text-gray-300'><span className='text-xs text-white'>Date</span>  {expense.date}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Star Time:</span> {expense.startTime}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>End Time: </span> {expense.endTime}</p>
                            <div className='text-gray-50 '>

                            </div>
                            <h5 className='text-xs text-gray-300'><span className='text-xs text-white'>Duration: </span>  <span className='font-semibold'>{expense.duration} </span> hours</h5>

                        </div>

                        <div className='mx-2 px-1 '>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Location: </span>{expense.location}</p>
                            <p className='text-xs text-gray-300'><span className='text-xs text-white'>Status:  </span>{expense.isCompleted ? "Visited" : "Not visited yet"}</p>


                        </div>

                        <div className='px-1 text-xs'>
                            <p className='text-xs text-gray-300'> <span className='text-xs text-white'>Rating </span> {expense.placerating} </p>
                            <button className='my-1'>See Details</button></div>

                    </div>

                </li>))}
            </ul>
        </div>



    );
}

export default CityItem;


