
"use client"

import { Places, Trips } from '../../types/trips';
import CityItem from './components/cities/CityItem';
import CityList from './components/cities/CityList';
import DestinationItem from './components/destination/DestinationItem';
import DestinationList from './components/destination/DestinationList';
import ExpensesList from './components/expenses/ExpensesList';
import UIHeader from './components/UI/UIHeader';
import { useTripsStore } from './stores/useStore';



export default function Home() {
  
  const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <UIHeader title="TRAVEL PLANNING APP"/>
        DESTINATIONS:
        <DestinationList  />
        CITY LIST: 
        <CityList/>
        EXPENSES
        <ExpensesList/>
        
      </div>
    </main>
  );
}

