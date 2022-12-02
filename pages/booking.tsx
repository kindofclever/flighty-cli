import Link from 'next/link';

import Button from '../components/Button';
import Header from '../components/Header';
import useStore from '../store/store';

const Booking = () => {
  const { chosenFlightTo, flightsTo, flightsBack, chosenFlightBack } =
    useStore();

  const handleDB = async () => {
    // Here is where id place a post request to the backend to update the flights
    // something like this: fetch('url', {method: 'POST', body: JSON.stringify({chosenFlightTo, chosenFlightBack})})
    console.log();
  };

  const start = flightsTo.find(
    (flight: { flightNumber: any }) => flight.flightNumber === chosenFlightTo
  );
  const end = flightsBack.find(
    (flight: { flightNumber: any }) =>
      flight.flightNumber === chosenFlightTo.splice(1, -6)
  );

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, fill in the form and click the button below'
      />
      {chosenFlightTo !== '' && (
        <div>
          <h3 className='text-2xl md:text-5xl'>Your journey starts at:</h3>
          <p>Departure location: {start.depatureDestination}</p>
          <p>Arrival location: {start.arrivalDestination}</p>
          <p>{start.depatureAt.split('T').join(' ')}</p>
          <p>{start.arriveAt.split('T').join(' ')}</p>
        </div>
      )}
      {chosenFlightBack !== '' && (
        <div>
          <h3>Your journey ends with:</h3>
        </div>
      )}
      <div className='flex justify-center items-center gap-5 mt-10'>
        <Link href={`/flights/${chosenFlightTo}`}>
          <Button
            text='Back'
            backgroundColor='#292829'
          />
        </Link>
        <Link href='/thankyou'>
          <div onClick={handleDB}>
            <Button
              text='Confirm booking'
              backgroundColor='#292829'
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
