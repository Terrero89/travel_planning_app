
"use client"

// import { useTripsStore } from '@/app/stores/useStore';
import Trips from '../../types/trips';


interface DestionationProps {
    destinationList: Trips[]
}


const DestinationItem: React.FC<DestionationProps> = ({ destinationList }) => {

    return (
        // <div className=" content-center my-2 p-2 ">
        //     <div className=" content-center">{destinationList.map((trip: Trips) =>( <h3>{trip.destination}</h3>))} </div>
        // </div>
        <div>
            <h3>DESTINATION LIST</h3>

            <ul className=' '>
                {destinationList.map((trip) => (<li className=' flex border rounded-md border-opacity-25 m-2 py-2 px-1' key={trip.id}>
                    <div className='mx-2 px-1  auto-w h-auto'>
                        <p>DESTINATION: {trip.destination}</p>
                        <div className='flex'>  <p>FROM: {trip.from}</p>
                            <p>TO: {trip.to}</p></div>
                            <p>Duration {trip.tripDuration} days</p>

                    </div>

                    <div className='mx-2 px-1 '>
                        <p>Type of Transportation: {trip.transportType}</p>
                        <p>trip status: {trip.isTripCompleted ? "completed" : "not completed"}</p>
                        <p>Trip Rating {trip.tripRating} </p>
                        <button>See Cities</button>

                    </div>

                  


                </li>))}
            </ul>
        </div>

    );
}

export default DestinationItem;

