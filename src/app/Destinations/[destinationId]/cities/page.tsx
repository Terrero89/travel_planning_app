"use client"

import CityItem from '@/app/components/cities/CityItem';
import CityList from '@/app/components/cities/CityList';
import {useParams}from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Expenses, Places, Trips } from '../../../../../types/trips';
import mockData from '../../../../../public/MockedData.json';

const citiesPage = () => {
  const [expenses, setExpenses] = useState<Expenses[] | Places[]>([]);
  const params = useParams();
  useEffect(() => {
    const destinationId = params.destinationId as string;
    const destination = (mockData as Trips[]).find((trip) => trip.destinationID === destinationId);

    if (destination) {
      // Flatten the expenses from all places
      const allExpenses = destination.places.flatMap((place) => place.expenses);
      // Remove empty objects from the expenses array
      const filteredExpenses = allExpenses.filter(expense => expense.expenseID);
      setExpenses(filteredExpenses);
    }
  }, [params.destinationId]);
  return (
    <div>
      <h1>ID: {params.destinationId}</h1>
      <h3>List of all expenses based on destination</h3>
      <div>
        <CityList/>
        {/* Pass expenses to CityList or any other component */}
        <CityItem cityList={expenses}  />
      </div>
    </div>
  );
}

export default citiesPage;