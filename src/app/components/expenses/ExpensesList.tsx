"use client";

import { useTripsStore } from '@/app/stores/useStore';
import { Expenses } from '../../../../types/trips';
import ExpensesItem from './ExpensesItem'; // Assuming ExpensesItem is the component you're rendering

const ExpensesList: React.FC = () => {
  // Extract all expenses from all places within all trips
  const expenses: Expenses[] = useTripsStore((state) =>
    state.trip.flatMap(trip => 
      trip.places.flatMap((place: { expenses: any; }) => place.expenses)
    )
  );

  return (
    <div className="">
      <ExpensesItem expensesList={expenses} />
    </div>
  );
}

export default ExpensesList;