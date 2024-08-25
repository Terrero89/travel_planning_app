
"use client"

import { Trips } from '../../types/trips';
import { calculateDaysRemaining, calculateTimeDifference, isDateGreater, timeSince } from '../../utils/date-convertion';
import CityList from './components/cities/CityList';
import DestinationList from './components/destination/DestinationList';
import ExpensesList from './components/expenses/ExpensesList';
import UIHeader from './components/UI/UIHeader';
import { useTripsStore } from './stores/useStore';



export default function Home() {

  const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);




  return (

    // if days  remaining arreee  0, then WILL show timeSinnce funccion result for  cities,deestinnattionx, and expenses.

    <main className="">
      <div className="mx-auto z-10 w-full max-w-3xl items-center justify-between font-mono text-sm ">
        <UIHeader title="Travel Planning App" />
        {calculateDaysRemaining("2025-02-28")} days remaining----- {calculateTimeDifference("10:55 AM", "10:55 PM")}
     /// {timeSince(new Date(2024, 7, 20))} HHHH---
        {isDateGreater(new Date(2024, 2, 9), new Date(2024, 1, 9)) === false ? "FALSE" : "TRUE"}
        <DestinationList />
        CITY LIST:
        <CityList />
        EXPENSES
        <ExpensesList />

      </div>
    </main>
  );
}

