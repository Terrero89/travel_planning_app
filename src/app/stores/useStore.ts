import { create } from 'zustand';
import Trips from '../../../types/trips';

interface TripsState {
  trip: Trips[];
}
export const useTripsStore = create<TripsState>((set) => ({
  trip:  [
    {
      destinationID: "trip1",
      destination: "Andalusia Euro trip",
      transportType: "Flight",
      from: "11-07-2024",
      to: "19-07-2024",
      destinationBudget: 1000, // based on the total cost of the trip
      tripDuration: 12,
      dateAdded: "08-07-2024",
      isTripCompleted: false,
      tripRating: 4.5,
      places: [
        {
          cityID: "city1",
          city: "Malaga",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4 },
            { expenseID: "ex2", category: "Food",expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating:4.4 },
            { expenseID: "ex3", category: "Landmarks", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating:4.4},
            { expenseID: "ex4", category: "Flight", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating:4.4 },
            { expenseID: "ex5", category: "Purchase", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating:4.4},
            { expenseID: "ex4", category: "Accommodation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, rplacerating:4.4},
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}

          ]

        },
        {
          cityID: "city2",
          city: "Seville ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
          
          ]

        },
        {
          cityID: "city3",
          city: "Granada ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
           
          ]

        },
        {
          cityID: "city4",
          city: "Cordoba ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
          
          ]

        },
        {
          cityID: "city5",
          city: "Ronda ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
          
          ]

        },
        {
          cityID: "city6",
          city: "Setenil De las Bodegas",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
        
          ]

        },

        {
          cityID: "city7",
          city: "Nerja/Frigiliana",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
        
          ]

        },
        {
          cityID: "city8",
          city: "Cadiz",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
          
          ]

        },

      ]
    },

    {
      destinationID: "trip2",
      destination: "Canada",
      transportType: "Flight",
      from: "11-07-2024",
      to: "19-07-2024",
      destinationBudget: 1000, // based on the total cost of the trip
      arriving: "11-08-2024",
      leaving: "11-19-2024",
      tripDuration: 12,
      dateAdded: "08-07-2024",
      isTripCompleted: false,
      rating: 4.7,
      places: [
        {
          cityID: "city1",
          city: "Montreal",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
            
          ]

        },
        {
          cityID: "city2",
          city: "Quebec City ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          cityRating: 4.5,
          expenses: [
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024",startTime: '03:56pm',endTime: '06:04pm',   duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4}
         
          ]

        },

      ]
    },

  ]

}));