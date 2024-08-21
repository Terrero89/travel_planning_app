
"use client"

import Trips, { Places } from '../../types/trips';
import { useTripsStore } from './stores/useStore';



export default function Home() {
  
  const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <div>HEADER</div>
        <p>TRIPS: {trip.map((trip: Trips) => trip.destination)}</p>
        <p>CITIES: {trip.map((trip: Trips) => trip.places.map((place: Places) => place.city))}</p>
        <p>EXPENSES: {trip.map((trip: Trips) => trip.places.map((place: Places) => place.expenses.map((expense: any) => expense.expense)))}</p>
      </div>
    </main>
  );
}

