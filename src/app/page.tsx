
"use client" 

import { useTripsStore } from './stores/useStore'
import {Trips} from './types/trips'


export default function Home() {
  const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <p>TRip {trip.map((trip: any) => trip.tripName)}</p>
       <p>CITIES: {trip.map((trip: any) => trip.places.map((place: any) => place.city))}</p>
      
      </div>
    </main>
  );
}

