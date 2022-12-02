import Link from 'next/link';

interface FlightCardProps {
  from: string;
  to: string;
  go: string;
  there: string;
  flightNumber: string;
  seats: number;
}

const FlightCard: React.FC<FlightCardProps> = ({
  from,
  to,
  go,
  seats,
  there,
  flightNumber,
}) => {
  return (
    <Link href={`/flights/${flightNumber}`}>
      <div className='w-[370] h-[200px] flex flex-col justify-center items-center text-xl md:text-3xl rounded-xl hover:bg-[#576ab9] hover:text-[#fefdfe]'>
        <div className='flex justify-between items-center'>
          <p className='text-[#f31f51]'>From:</p>
          <p>{from}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[#f31f51]'>To:</p>
          <p>{to}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className=''>Available Seats:</p>
          <p>{seats}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className=''>Departure at:</p>
          <p>{go.split('T').join(' ')}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className=''>Arrival at:</p>
          <p>{there.split('T').join(' ')}</p>
        </div>
      </div>
    </Link>
  );
};

export default FlightCard;
