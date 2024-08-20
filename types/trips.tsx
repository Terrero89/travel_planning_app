export type TransportType = 'Flight' | 'Drive' | 'Bus';


export type Expenses = {
    expenseID: string;
    category: string;
    expenseName: string;
    cost: number;
    date: Date;
    duration: number;
    comments: string;
    isCompleted: Boolean
}

export interface Places {
    cityID: string;
    city: string;
    from: Date;
    to: Date;
    totalCost: number;
    isThisCityVisited: boolean;
    expenses: Expenses[];
}

export default interface Trips {
    tripID: string;
    tripName: string;
    transportType: TransportType;
    from: Date;
    to: Date;
    totalCost: number;
    arriving: Date;
    leaving: Date;
    tripDuration: 12,
    dateAdded: Date;
    places: Places[];
}