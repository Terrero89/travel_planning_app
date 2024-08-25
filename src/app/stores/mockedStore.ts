import { create } from 'zustand';
import Trips from '../../../types/trips';
import { calculateDaysRemaining, calculateDaysSpent } from '../../../utils/date-convertion';

interface TripsState {
    trip: Trips[];
}
export const useTripsStore = create<TripsState>((set) => ({
    trip: [
        {
            destinationID: "trip1",
            destination: "Andalusia Trip",
            transportType: "Flight",
            from: new Date(2024, 10, 7).toDateString(),
            to: new Date(2024, 10, 19).toDateString(),
            destinationBudget: 1000,
            get tripDuration() {
                return calculateDaysSpent(this.from, this.to);
            },
            get daysRemainingForTrip() {
                return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
            },
            dateAdded: new Date(2024, 7, 7).toDateString(),
            isTripCompleted: false,
            tripRating: 4.5,
            citiesIncludedOnTrip: 9,
            places: [
                {
                    cityID: "city1",
                    city: "Malaga",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,
                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 15,
                    expenses: [
                        {
                            expenseID: "ex1",
                            category: "Attractions",
                            expense: "Alcazaba of Málaga",
                            cost: 10,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '09:00am',
                            endTime: '11:00am',
                            duration: 2.0,
                            comments: "Historic fortress with stunning views of the city",
                            location: 'Málaga, Spain',
                            isCompleted: false,
                            placeRating: 4.7,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex2",
                            category: "Food",
                            expense: "Seafood at El Tintero",
                            cost: 40,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '12:00pm',
                            endTime: '01:30pm',
                            duration: 1.5,
                            comments: "Famous for its fresh seafood and unique auction-style dining",
                            location: 'El Tintero, Málaga, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                    

                    ]

                },
                {
                    cityID: "city2",
                    city: "Seville ",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 8,
                    expenses: [
                        {
                            expenseID: "ex1",
                            category: "Attractions",
                            expense: "Seville Cathedral",
                            cost: 15,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '10:00am',
                            endTime: '12:00pm',
                            duration: 2.0,
                            comments: "Stunning Gothic architecture and the Giralda Tower view",
                            location: 'Seville, Spain',
                            isCompleted: false,
                            placerating: 4.8,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex2",
                            category: "Food",
                            expense: "Tapas at El Rinconcillo",
                            cost: 30,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '01:00pm',
                            endTime: '02:00pm',
                            duration: 1.0,
                            comments: "Traditional Andalusian tapas experience",
                            location: 'El Rinconcillo, Seville, Spain',
                            isCompleted: false,
                            placerating: 4.7,
                            daysRemainingForExpense: 0,
                        },
                      
                    ]

                },
                {
                    cityID: "city3",
                    city: "Granada ",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip

                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },

                    expenseIncludedOnCity: 6,
                    expenses: [
                       
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Anacapri",
                            cost: 110,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a comfortable hotel located near the city center",
                            location: 'Granada, Spain',
                            isCompleted: false,
                            placerating: 4.7,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Alhambra Souvenir",
                            cost: 15,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '07:30pm',
                            endTime: '08:00pm',
                            duration: 0.5,
                            comments: "Buy a souvenir related to the Alhambra to remember your visit",
                            location: 'Granada, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        }
                    ]

                },
                {
                    cityID: "city4",
                    city: "Cordoba ",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,


                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 5,
                    expenses: [
                      
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Hospes Palacio del Bailío",
                            cost: 180,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '07:00pm',
                            endTime: '08:00am',
                            duration: 13.0,
                            comments: "Luxurious hotel set in a 16th-century palace",
                            location: 'Córdoba, Spain',
                            isCompleted: false,
                            placerating: 4.9,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Handmade Leather Goods",
                            cost: 50,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:30pm',
                            duration: 0.5,
                            comments: "Artisan leather items from a local workshop",
                            location: 'Córdoba, Spain',
                            isCompleted: false,
                            placerating: 4.7,
                            daysRemainingForExpense: 0,
                        }

                    ]

                },
                {
                    cityID: "city5",
                    city: "Ronda ",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 9,
                    expenses: [
                      
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Rural Finca La Loma",
                            cost: 95,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a rural hotel with a cozy atmosphere near Setenil",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Local Handicrafts",
                            cost: 20,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:30pm',
                            endTime: '09:00pm',
                            duration: 0.5,
                            comments: "Buy handmade crafts and souvenirs from local artisans",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.5,
                            daysRemainingForExpense: 0,
                        }
                    ]

                },
                {
                    cityID: "city6",
                    city: "Setenil De las Bodegas",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 7,
                    expenses: [
                       
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Rural Finca La Loma",
                            cost: 95,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a rural hotel with a cozy atmosphere near Setenil",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Local Handicrafts",
                            cost: 20,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:30pm',
                            endTime: '09:00pm',
                            duration: 0.5,
                            comments: "Buy handmade crafts and souvenirs from local artisans",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.5,
                            daysRemainingForExpense: 0,
                        }
                    ]

                },

                {
                    cityID: "city7",
                    city: "Nerja/Frigiliana",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 9,
                    expenses: [
                       
                        {
                            expenseID: "ex6",
                            category: "Purchase",
                            expense: "Local Honey",
                            cost: 10,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '06:30pm',
                            endTime: '07:00pm',
                            duration: 0.5,
                            comments: "Buy some local honey, a specialty of the region",
                            location: 'Frigiliana, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Accommodation",
                            expense: "Hotel Balcón de Europa",
                            cost: 140,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a hotel with stunning sea views in Nerja",
                            location: 'Nerja, Spain',
                            isCompleted: false,
                            placerating: 4.7,
                            daysRemainingForExpense: 0,
                        }
                    ]

                },
                {
                    cityID: "city8",
                    city: "Cadiz",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 15,
                    expenses: [
                        
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Rural Finca La Loma",
                            cost: 95,

                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a rural hotel with a cozy atmosphere near Setenil",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Local Handicrafts",
                            cost: 20,
                            date: new Date(2024, 10, 12).toDateString(),
                            startTime: '08:30pm',
                            endTime: '09:00pm',
                            duration: 0.5,
                            comments: "Buy handmade crafts and souvenirs from local artisans",
                            location: 'Setenil de las Bodegas, Spain',
                            isCompleted: false,
                            placerating: 4.5,
                            daysRemainingForExpense: 0,
                        },

                    ]

                },

                {
                    cityID: "city9",
                    city: "Toledo",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 12,
                    expenses: [
                        
                        {
                            expenseID: "ex6",
                            category: "Accommodation",
                            expense: "Hotel Santo Domingo",
                            cost: 120,
                            date: "11-12-2024",
                            startTime: '08:00pm',
                            endTime: '08:00am',
                            duration: 12.0,
                            comments: "Stay at a comfortable hotel located centrally in Toledo",
                            location: 'Toledo, Spain',
                            isCompleted: false,
                            placerating: 4.6,
                            daysRemainingForExpense: 0,
                        },
                        {
                            expenseID: "ex7",
                            category: "Purchase",
                            expense: "Toledo Sword Souvenir",
                            cost: 50,
                            date: "11-12-2024",
                            startTime: '08:30pm',
                            endTime: '09:00pm',
                            duration: 0.5,
                            comments: "Buy a traditional Toledo sword as a memorable souvenir",
                            location: 'Toledo, Spain',
                            isCompleted: false,
                            placerating: 4.8,
                            daysRemainingForExpense: 0,
                        }
                    ]

                },

            ]
        },

        {
            destinationID: "trip2",
            destination: "Canada",
            transportType: "Flight",
            from: new Date(2024, 11, 20).toDateString(),
            to: new Date(2024, 11, 28).toDateString(),
            destinationBudget: 1000, // based on the total cost of the trip
            get tripDuration() {
                return calculateDaysSpent(this.from, this.to);
            },
            get daysRemainingForTrip() {
                return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? 'visited' : 0; //! crete util to make day/dayss based on how many days are left
            },
            dateAdded: "08-07-2024",
            isTripCompleted: false,
            tripRating: 4.7,
            citiesIncludedOnTrip: 2,
            places: [
                {
                    cityID: "city1",
                    city: "Montreal",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 1,
                    expenses: [
                        {
                            expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm', endTime: '06:04pm', duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4,
                            daysRemainingForExpense: 0,
                        }

                    ]

                },
                {
                    cityID: "city2",
                    city: "Quebec City ",
                    from: new Date(2024, 10, 9).toDateString(),
                    to: new Date(2024, 10, 12).toDateString(),
                    totalCost: 0, // based on the total cost of the trip
                    isThisCityVisited: false,
                    cityRating: 4.5,

                    get duration() {
                        return calculateDaysSpent(this.from, this.to);
                    },
                    get daysRemainingForCity() {
                        return calculateDaysRemaining(this.from) === calculateDaysRemaining(this.from) ? calculateDaysRemaining(this.from) : 0; //! crete util to make day/dayss based on how many days are left
                    },
                    expenseIncludedOnCity: 3,
                    expenses: [
                        {
                            expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm', endTime: '06:04pm', duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4,
                            daysRemainingForExpense: 0,
                        }

                    ]

                },



            ]
        },

    ]

}));