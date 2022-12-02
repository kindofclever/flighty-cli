import Link from 'next/link';
import Button from '../components/Button';
import Header from '../components/Header';
import useStore from '../store/store';

const thankyou = () => {
  const {
    chosenFlightTo,
    flightsTo,
    flightsBack,
    chosenFlightBack,
    minorQuantity,
    adultsQuantity,
  } = useStore();
  const start = flightsTo.find(
    (flight: { flightNumber: any }) => flight.flightNumber === chosenFlightTo
  );
  const end = flightsBack.find(
    (flight: { flightNumber: any }) =>
      flight.flightNumber === chosenFlightTo.split('').splice(1, -6).join('')
  );
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen bg-clouds bg-cover bg-no-repeat'>
        <div className='bg-[#fefdfe] py-10 px-20 rounded-xl flex flex-col justify-center items-center'>
          <Header
            title='Thank you'
            description='For booking with us!'
            span=' very much!'
          />

          {chosenFlightTo !== '' && (
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-2xl md:text-3xl'>Your journey starts at:</h3>
              <p>Departure location: {start.depatureDestination}</p>
              <p>Booked Seats: {minorQuantity + adultsQuantity}</p>
              <p>Arrival location: {start.arrivalDestination}</p>
              <p>{start.depatureAt.split('T').join(' ')}</p>
              <p>{start.arriveAt.split('T').join(' ')}</p>
            </div>
          )}
          {chosenFlightBack !== '' && (
            <div className='flex flex-col justify-center items-center'>
              <h3>Your journey ends with:</h3>
              <p>Departure location: {end.depatureDestination}</p>
              <p>Arrival location: {end.arrivalDestination}</p>
              <p>{end.depatureAt.split('T').join(' ')}</p>
              <p>{end.arriveAt.split('T').join(' ')}</p>
            </div>
          )}
          <Link href='/home'>
            <div className='animate-bounce mt-10'>
              <Button
                backgroundColor='#292829'
                text='Book more flights'
              />
            </div>
          </Link>
        </div>
      </div>
      );
    </div>
  );
};

export default thankyou;
