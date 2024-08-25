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
              placeRating: 4.7
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
              placerating: 4.6
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Málaga Cathedral",
              cost: 6,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '02:00pm',
              endTime: '03:30pm',
              duration: 1.5,
              comments: "Renowned as 'La Manquita', a beautiful Renaissance-style cathedral",
              location: 'Málaga, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi to Gibralfaro Castle",
              cost: 8,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:45pm',
              endTime: '04:00pm',
              duration: 0.25,
              comments: "Quick ride to the castle",
              location: 'Málaga, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Gibralfaro Castle",
              cost: 5,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:15pm',
              endTime: '06:00pm',
              duration: 1.75,
              comments: "Historic castle with panoramic views of Málaga",
              location: 'Málaga, Spain',
              isCompleted: false,
              placerating: 4.7
            },
            {
              expenseID: "ex6",
              category: "Accommodation",
              expense: "Hotel Molina Lario",
              cost: 150,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '06:30pm',
              endTime: '08:00am',
              duration: 13.5,
              comments: "Stylish hotel in the city center with a rooftop pool",
              location: 'Málaga, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex7",
              category: "Purchase",
              expense: "Picasso Museum Souvenirs",
              cost: 30,
              date: new Date(2024, 10, 12).toDateString(),

              startTime: '08:00pm',
              endTime: '08:30pm',
              duration: 0.5,
              comments: "Art books and prints from the museum store",
              location: 'Málaga, Spain',
              isCompleted: false,
              placerating: 4.6
            }
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
              placerating: 4.8
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
              placerating: 4.7
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Alcázar of Seville",
              cost: 13,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '02:30pm',
              endTime: '05:00pm',
              duration: 2.5,
              comments: "Royal Palace with beautiful gardens",
              location: 'Seville, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi to Plaza de España",
              cost: 10,
              date: new Date(2024, 10, 12).toDateString(),
              endTime: '05:45pm',
              duration: 0.25,
              comments: "Quick and convenient",
              location: 'Seville, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Plaza de España",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '06:00pm',
              endTime: '07:00pm',
              duration: 1.0,
              comments: "Iconic square with beautiful architecture and canal",
              location: 'Seville, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex6",
              category: "Accommodation",
              expense: "Hotel Alfonso XIII",
              cost: 200,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '07:30pm',
              endTime: '08:00am',
              duration: 12.5,
              comments: "Luxurious stay in a historic hotel",
              location: 'Seville, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex7",
              category: "Purchase",
              expense: "Flamenco Souvenirs",
              cost: 25,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '08:00pm',
              endTime: '08:30pm',
              duration: 0.5,
              comments: "Handcrafted items from a local shop",
              location: 'Seville, Spain',
              isCompleted: false,
              placerating: 4.6
            }
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Alhambra Palace",
              cost: 14,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:00am',
              endTime: '12:00pm',
              duration: 3.0,
              comments: "Visit the stunning Moorish palace and fortress with beautiful gardens and intricate architecture",
              location: 'Granada, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Tapas Dinner at Bodegas Castañeda",
              cost: 25,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '01:00pm',
              endTime: '02:30pm',
              duration: 1.5,
              comments: "Enjoy traditional Spanish tapas at a popular local eatery",
              location: 'Granada, Spain',
              isCompleted: false,
              placerating: 4.7
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Granada Cathedral",
              cost: 5,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:00pm',
              endTime: '04:00pm',
              duration: 1.0,
              comments: "Explore the impressive Renaissance cathedral and its beautiful interior",
              location: 'Granada, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi to Albaicín District",
              cost: 10,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:30pm',
              endTime: '05:00pm',
              duration: 0.5,
              comments: "Short taxi ride to the historic Albaicín district known for its narrow streets and views",
              location: 'Granada, Spain',
              isCompleted: false,
              placerating: 4.6
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Albaicín District Exploration",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '05:00pm',
              endTime: '07:00pm',
              duration: 2.0,
              comments: "Wander through the charming old Moorish quarter with its traditional houses and streets",
              location: 'Granada, Spain',
              isCompleted: false,
              placerating: 4.8
            },
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
              placerating: 4.7
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
              placerating: 4.6
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Mezquita-Catedral de Córdoba",
              cost: 11,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:00am',
              endTime: '11:00am',
              duration: 2.0,
              comments: "Iconic mosque-cathedral, a blend of Islamic and Christian architecture",
              location: 'Córdoba, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Salmorejo at Bodegas Mezquita",
              cost: 15,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '12:00pm',
              endTime: '01:30pm',
              duration: 1.5,
              comments: "Traditional cold soup, a must-try dish in Córdoba",
              location: 'Bodegas Mezquita, Córdoba, Spain',
              isCompleted: false,
              placerating: 4.7
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Alcázar de los Reyes Cristianos",
              cost: 8,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '02:00pm',
              endTime: '03:30pm',
              duration: 1.5,
              comments: "Historic fortress with beautiful gardens and views of the city",
              location: 'Córdoba, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi to Medina Azahara",
              cost: 20,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:45pm',
              endTime: '04:15pm',
              duration: 0.5,
              comments: "Ride to the ruins of the medieval palace-city",
              location: 'Córdoba, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Medina Azahara",
              cost: 9,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:30pm',
              endTime: '06:30pm',
              duration: 2.0,
              comments: "Explore the archaeological site of the ancient palace-city",
              location: 'Córdoba, Spain',
              isCompleted: false,
              placerating: 4.6
            },
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
              placerating: 4.9
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
              placerating: 4.7
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Exploring the Cave Houses",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '10:00am',
              endTime: '12:00pm',
              duration: 2.0,
              comments: "Walk through the unique cave houses built into the cliffs",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Lunch at Restaurante El Bandolero",
              cost: 18,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '01:00pm',
              endTime: '02:30pm',
              duration: 1.5,
              comments: "Enjoy traditional Andalusian dishes in a local restaurant",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.6
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Visiting the Church of la Encarnación",
              cost: 3,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:00pm',
              endTime: '04:00pm',
              duration: 1.0,
              comments: "Explore the historic church with its interesting architecture",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi from Ronda to Setenil de las Bodegas",
              cost: 35,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:00am',
              endTime: '10:00am',
              duration: 1.0,
              comments: "Taxi ride to reach Setenil de las Bodegas from Ronda",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.4
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Walking Tour of Setenil",
              cost: 10,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:00pm',
              endTime: '05:30pm',
              duration: 1.5,
              comments: "Guided walking tour to explore the town’s unique features",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.7
            },
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
              placerating: 4.6
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
              placerating: 4.5
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Exploring the Cave Houses",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '10:00am',
              endTime: '12:00pm',
              duration: 2.0,
              comments: "Walk through the unique cave houses built into the cliffs",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Lunch at Restaurante El Bandolero",
              cost: 18,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '01:00pm',
              endTime: '02:30pm',
              duration: 1.5,
              comments: "Enjoy traditional Andalusian dishes in a local restaurant",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.6
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Visiting the Church of la Encarnación",
              cost: 3,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:00pm',
              endTime: '04:00pm',
              duration: 1.0,
              comments: "Explore the historic church with its interesting architecture",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi from Ronda to Setenil de las Bodegas",
              cost: 35,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:00am',
              endTime: '10:00am',
              duration: 1.0,
              comments: "Taxi ride to reach Setenil de las Bodegas from Ronda",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.4
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Walking Tour of Setenil",
              cost: 10,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:00pm',
              endTime: '05:30pm',
              duration: 1.5,
              comments: "Guided walking tour to explore the town’s unique features",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.7
            },
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
              placerating: 4.6
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
              placerating: 4.5
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Caves of Nerja",
              cost: 12,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:30am',
              endTime: '11:00am',
              duration: 1.5,
              comments: "Explore the famous limestone caves with impressive stalactites and stalagmites",
              location: 'Nerja, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Paella at Ayo’s Restaurant",
              cost: 18,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '12:30pm',
              endTime: '02:00pm',
              duration: 1.5,
              comments: "Enjoy authentic paella at a beachfront restaurant",
              location: 'Nerja, Spain',
              isCompleted: false,
              placerating: 4.7
            },
            {
              expenseID: "ex3",
              category: "Attractions",
              expense: "Balcony of Europe",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '02:30pm',
              endTime: '03:30pm',
              duration: 1.0,
              comments: "Stroll along the iconic viewpoint offering stunning views of the Mediterranean",
              location: 'Nerja, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Bus to Frigiliana",
              cost: 3,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:00pm',
              endTime: '04:30pm',
              duration: 0.5,
              comments: "Short bus ride from Nerja to the charming village of Frigiliana",
              location: 'Nerja to Frigiliana, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Wander through Frigiliana",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '05:00pm',
              endTime: '06:30pm',
              duration: 1.5,
              comments: "Explore the whitewashed streets and scenic views of Frigiliana",
              location: 'Frigiliana, Spain',
              isCompleted: false,
              placerating: 4.8
            },
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
              placerating: 4.6
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
              placerating: 4.7
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Exploring the Cave Houses",
              cost: 0,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '10:00am',
              endTime: '12:00pm',
              duration: 2.0,
              comments: "Walk through the unique cave houses built into the cliffs",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Lunch at Restaurante El Bandolero",
              cost: 18,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '01:00pm',
              endTime: '02:30pm',
              duration: 1.5,
              comments: "Enjoy traditional Andalusian dishes in a local restaurant",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.6
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Visiting the Church of la Encarnación",
              cost: 3,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '03:00pm',
              endTime: '04:00pm',
              duration: 1.0,
              comments: "Explore the historic church with its interesting architecture",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi from Ronda to Setenil de las Bodegas",
              cost: 35,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '09:00am',
              endTime: '10:00am',
              duration: 1.0,
              comments: "Taxi ride to reach Setenil de las Bodegas from Ronda",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.4
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Walking Tour of Setenil",
              cost: 10,
              date: new Date(2024, 10, 12).toDateString(),
              startTime: '04:00pm',
              endTime: '05:30pm',
              duration: 1.5,
              comments: "Guided walking tour to explore the town’s unique features",
              location: 'Setenil de las Bodegas, Spain',
              isCompleted: false,
              placerating: 4.7
            },
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
              placerating: 4.6
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
              placerating: 4.5
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
              expenseID: "ex1",
              category: "Attractions",
              expense: "Toledo’s Historic Center",
              cost: 10,
              date: "11-12-2024",
              startTime: '10:00am',
              endTime: '01:00pm',
              duration: 3.0,
              comments: "Explore the UNESCO World Heritage Site with its medieval architecture and historical landmarks",
              location: 'Toledo, Spain',
              isCompleted: false,
              placerating: 4.8
            },
            {
              expenseID: "ex2",
              category: "Food",
              expense: "Lunch at Restaurante Adolfo",
              cost: 25,
              date: "11-12-2024",
              startTime: '01:30pm',
              endTime: '03:00pm',
              duration: 1.5,
              comments: "Enjoy traditional Spanish cuisine with a focus on local specialties",
              location: 'Toledo, Spain',
              isCompleted: false,
              placerating: 4.6
            },
            {
              expenseID: "ex3",
              category: "Landmarks",
              expense: "Toledo Cathedral",
              cost: 12,
              date: "11-12-2024",
              startTime: '03:30pm',
              endTime: '05:00pm',
              duration: 1.5,
              comments: "Visit the grand Gothic cathedral known for its stunning architecture and artwork",
              location: 'Toledo, Spain',
              isCompleted: false,
              placerating: 4.9
            },
            {
              expenseID: "ex4",
              category: "Transportation",
              expense: "Taxi to the Alcázar",
              cost: 15,
              date: "11-12-2024",
              startTime: '05:30pm',
              endTime: '06:00pm',
              duration: 0.5,
              comments: "Short taxi ride to the impressive Alcázar fortress",
              location: 'Toledo, Spain',
              isCompleted: false,
              placerating: 4.5
            },
            {
              expenseID: "ex5",
              category: "Attractions",
              expense: "Alcázar of Toledo",
              cost: 8,
              date: "11-12-2024",
              startTime: '06:00pm',
              endTime: '08:00pm',
              duration: 2.0,
              comments: "Explore the Alcázar with its military history and panoramic views of Toledo",
              location: 'Toledo, Spain',
              isCompleted: false,
              placerating: 4.7
            },
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
              placerating: 4.6
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
              placerating: 4.8
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
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm', endTime: '06:04pm', duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4 }

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
            { expenseID: "ex4", category: "Transportation", expense: "Malaga Cathedral", cost: 20, date: "08-07-2024", startTime: '03:56pm', endTime: '06:04pm', duration: 2.1, comments: "", location: '', isCompleted: false, placerating: 4.4 }

          ]

        },



      ]
    },

  ]

}));