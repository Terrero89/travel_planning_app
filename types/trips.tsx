export type TransportType = 'Flight' | 'Car' | 'Bus';

export type Trips =  {
    destinationID: string;
    destination: string;
    transportType: TransportType;
    from: Date | string;
    to: Date | string;
    destinationBudget:number; // based on the total cost of the trip
    tripDuration: 12,
    dateAdded: Date | string;
    isTripCompleted: boolean;
    tripRating: number;
    places: Places[];
}
export type Expenses = {
    expenseID: string;
    category: string;
    expenseName: string;
    cost: number;
    date: Date | string;
    startTime: Date | string;
    endTime: Date | string;
    duration: number;
    comments: string;
    isCompleted: Boolean
    placerRating: number;
}

export type Places = {
    cityID: string;
    city: string;
    from: Date | string;
    to: Date | string;
    totalCost: number;
    isThisCityVisited: boolean;
    cityRating: number;
    expenses: Expenses[];
}


