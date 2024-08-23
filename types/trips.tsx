export type TransportType = 'Flight' | 'Drive' | 'Bus';


export type Expenses = {
    expenseID: string;
    category: string;
    expenseName: string;
    cost: number;
    date: Date | string;
    duration: number;
    comments: string;
    isCompleted: Boolean
}

export type Places = {
    cityID: string;
    city: string;
    from: Date | string;
    to: Date | string;
    totalCost: number;
    isThisCityVisited: boolean;
    expenses: Expenses[];
}

export type Trips =  {
    tripID: string;
    tripName: string;
    transportType: TransportType;
    from: Date | string;
    to: Date | string;
    totalCost: number;
    arriving: Date | string;
    leaving: Date | string;
    tripDuration: 12,
    dateAdded: Date | string;
    places: Places[];
}