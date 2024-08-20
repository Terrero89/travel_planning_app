
"use client" 
// const trips = [
//   {
//     tripID: "trip1",
//     tripName: "Andalusia Euro trip",
//     transportType: "Flight",
//     from: "11-07-2024",
//     to: "19-07-2024",
//     totalCost: 1000, // based on the total cost of the trip
//     arriving: "11-08-2024",
//     leaving: "11-19-2024",
//     tripDuraton: 12,
//     dateAdded: "08-07-2024",
//     places: [
//       {
//         cityID: "city1",
//         city: "Malaga", { user: any; }
//         from: "11-09-2024",
//         to: "11-12-2024",
//         totalCost: 0, // based on the total cost of the trip
//         isThisCityVisited: false,
//         expenses: [
//           { expenseID: "ex1", category: "Attractions", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex2", category: "Food", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex3", category: "Landmarks", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex4", category: "Flight", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex5", category: "Purchase", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex4", category: "Accommodation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false },
//           { expenseID: "ex4", category: "Transportation", expenseName: "Malaga Cathedral", cost: 20, date: "08-07-2024", duration: 2, comments: "", isCompleted: false }

//         ]

//       }
//     ]
//   }

// ];

import { useBearStore } from './stores/useStore'

export default function Home() {
  const bears = useBearStore((state: { bears: any; }) => state.bears);
  // const increase = useBearStore((state: { increase: any; }) => state.increase);
  // const decrease = useBearStore((state: { decrease: any; }) => state.decrease);
  // const reset = useBearStore((state: { reset: any; }) => state.reset);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        hellow {bears}
      </div>
    </main>
  );
}
