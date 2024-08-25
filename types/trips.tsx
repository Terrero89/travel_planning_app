export type TransportType = 'Flight' | 'Car' | 'Bus';
export type AccommodationType = 'Airbnb' | 'Hotel' | 'Hostel';
export type Trips =  {
    destinationID: string;
    destination: string;
    transportType: TransportType;
    from: Date | string;
    to: Date | string;
    destinationBudget:number; // based on the total cost of the trip
    tripDuration: number;
    dateAdded: Date | string;
    isTripCompleted: boolean;
    tripRating: number;
    daysRemainingForTrip: number;
    citiesIncludedOnTrip: number;
    places: Places[];
}
export type Expenses = {
    expense: string;
    expenseID: string;
    category: string;
    // accomodation : 'airbnb | hotel | hostel'
    expenseName: string;
    cost: number;
    date: Date | string;
    startTime: Date | string;
    endTime: Date | string;
    location: string;
    duration: number;
    comments: string;
    isCompleted: Boolean
    placerating?: number;
    daysRemainingForExpense: number;
}

export type Places = {
    cityID: string;
    city: string;
    from: Date | string;
    to: Date | string;
     // accomodationCost : number '
    totalCost: number;
    isThisCityVisited: boolean;
    cityRating: number;
    duration: number;
    daysRemainingForCity: number;// if it is due, convert it to positive and add 13 days ago.. etc..
    expenseIncludedOnCity: number;
    expenses: Expenses[];
    
}


// pending to add dates to all of the cities