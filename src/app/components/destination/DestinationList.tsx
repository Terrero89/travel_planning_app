
"use client"

import { useTripsStore } from '@/app/stores/useStore';
import Trips from '../../types/trips';
import DestinationItem from './DestinationItem';
import Badge from '../UI/BadgeItem'




const Header: React.FC<{}> = ({ }) => {
  const destination = useTripsStore((state: { trip: Trips[]; }) => state.trip);

  return (
    <div className="">
      {/* <Badge content={4.7} color={'red'} children={'Rating'} /> */}
      <DestinationItem destinationList={destination} />
    </div>

  );
}

export default Header;



