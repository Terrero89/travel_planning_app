import DestinationList from '../components/destination/DestinationList'

interface Props { }

const DestinationsPage = () => {
  return <div className="mx-auto z-10 w-full max-w-3xl items-center justify-between font-mono text-sm ">
    <DestinationList />
  </div>
}

export default DestinationsPage