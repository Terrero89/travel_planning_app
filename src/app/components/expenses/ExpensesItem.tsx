
"use client"

import { Expenses, Places, Trips } from '../../../../types/trips';
// import { useTripsStore } from '@/app/stores/useStore';


interface ExpensesProps {
    expensesList: Expenses[]
}


const CityItem: React.FC<ExpensesProps> = ({ expensesList }) => {

    return (


        <div>
      {expensesList.map((expense: Expenses) => (
            <>
            <p>EXPENSE:{expense.expense}</p>
            <p>CATEGORY: {expense.category}</p>
            </>
        ))}
        
        </div>
       


    );
}

export default CityItem;


