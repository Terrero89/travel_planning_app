
"use client"

import Trips, { Places } from '../../types/trips';
import UIHeader from './components/UI/UIHeader';
import { useTripsStore } from './stores/useStore';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({}) => {
    const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);

  return (
    <div className="border-2 border-white border-opacity-25 content-center my-2 p-2">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <div>TRIPS: {trip.map((trip: Trips) => trip.destination)}</div>
      </div>
    </div>

  );
}

export default Header;

function useTripsStore(arg0: (state: { trip: Trips[]; }) => Trips[]) {
    throw new Error('Function not implemented.');
}
