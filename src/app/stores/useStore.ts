import { create } from 'zustand';

interface BearState {
  trip: [{}];


}
export const useTripsStore = create<BearState>((set) => ({
  trip: [
    {
      tripID: "trip1",
      tripName: "Andalusia Euro trip",
      transportType: "Flight",
      from: "11-07-2024",
      to: "19-07-expenses: Array<Expenses>;2024",
      totalCost: 1000, // based on the total cost of the trip
      arriving: "11-08-2024",
      leaving: "11-19-2024",
      tripDuration: 12,
      dateAdded: "08-07-2024",
      isTripCompleted: false,
      places: [
        {
          cityID: "city1",
          city: "Malaga",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Flight", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex5", category: "Purchase", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Accommodation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Transportation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false }

          ]

        },
        {
          cityID: "city2",
          city: "Seville ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Flight", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex5", category: "Purchase", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Accommodation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Transportation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false }

          ]

        },
        {
          cityID: "city3",
          city: "Granada ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },
        {
          cityID: "city4",
          city: "Cordoba ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },
        {
          cityID: "city5",
          city: "Ronda ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },
        {
          cityID: "city6",
          city: "Setenil De las Bodegas",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },

        {
          cityID: "city7",
          city: "Nerja/Frigiliana",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },
        {
          cityID: "city8",
          city: "Cadiz",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },

          ]

        },

      ]
    },

    {
      tripID: "trip2",
      tripName: "Canada 2024",
      transportType: "Drive",
      from: "11-07-2024",
      to: "19-07-2024",
      totalCost: 1000, // based on the total cost of the trip
      arriving: "11-08-2024",
      leaving: "11-19-2024",
      tripDuration: 12,
      dateAdded: "08-07-2024",
      isTripCompleted: false,
      places: [
        {
          cityID: "city1",
          city: "Montreal",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Flight", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex5", category: "Purchase", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Accommodation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Transportation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false }

          ]

        },
        {
          cityID: "city2",
          city: "Quebec City ",
          from: "11-09-2024",
          to: "11-12-2024",
          totalCost: 0, // based on the total cost of the trip
          isThisCityVisited: false,
          expenses: [
            { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Flight", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex5", category: "Purchase", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Accommodation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
            { expenseID: "ex4", category: "Transportation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false }

          ]

        },

      ]
    },

  ]

}));