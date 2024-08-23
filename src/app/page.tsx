
"use client"

import Trips, { Places } from '../../types/trips';
import UIHeader from './components/UI/UIHeader';
import { useTripsStore } from './stores/useStore';



export default function Home() {
  
  const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <UIHeader title="TRAVEL PLANNING APP"/>
        <div>TRIPS: {trip.map((trip: Trips) => trip.destination)}</div>
        <div>CITIES: {trip.map((trip: Trips) => trip.places.map((place: Places) => place.city))}</div>
        <div>EXPENSES: {trip.map((trip: Trips) => trip.places.map((place: Places) => place.expenses.map((expense: any) => expense.expense)))}</div>
      </div>
    </main>
  );
}

