import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../../components/Button';
import useStore from '../../store/store';
import Header from '../../components/Header';
import FlightCard from '../../components/FlightCard';
import FilterForInfo from '../../components/FilterForInfo';

const FlightDetails = () => {
  const router = useRouter();
  const flightNr = router.query.slug;

  const {
    flightsTo,
    flightsBack,
    roundTrip,
    setChosenFlightBack,
    chosenFlightBack,
  } = useStore();

  const detailFlightData = flightsTo.find(
    (flight: { flightNumber: string | string[] | undefined }) =>
      flight.flightNumber === flightNr
  );

  console.log(flightsBack);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, click the button below'
      />
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-2xl md:4xl uppercase border-2 p-5 rounded-xl mb-5'>
          Flight number: {flightNr}
        </h3>
        <h3 className='text-2xl md:4xl '>Flight info:</h3>
        <p>{detailFlightData?.depatureDestination}</p>
        <p>{detailFlightData?.arrivalDestination}</p>
        <p>{detailFlightData?.depatureAt}</p>
        <p>{detailFlightData?.arriveAt}</p>
        <p>{detailFlightData?.avaliableSeats}</p>
      </div>
      {roundTrip === 'yes' && (
        <div className='flex flex-col justify-center items-center'>
          <h3>
            Because you chose a round trip please also choose a flight back
          </h3>
          <div className='grid md:grid-cols-3 w-[400px] md:w-[1500px] h-[200px] md:h-[370px] gap-5 m-10'>
            <FilterForInfo
              label='Available flights back'
              setState={setChosenFlightBack}
              optionValues={flightsBack.map(
                (flight: {
                  depatureDestination: string;
                  depatureAt: string;
                  prices: { adult: string; child: string };
                  avaliableSeats: string;
                  flightNumber: string;
                }) =>
                  'Departure From: ' +
                  flight.depatureDestination +
                  ' --- Departure at: ' +
                  flight.depatureAt +
                  ' --- Price Adult: ' +
                  flight.prices.adult +
                  '--- Price Child: ' +
                  flight.prices.child +
                  '--- Available Seats: ' +
                  flight.avaliableSeats +
                  '--- Flight number: ' +
                  flight.flightNumber
              )}
              value={chosenFlightBack}
            />
          </div>
        </div>
      )}

      <Link href='/booking'>
        <Button
          text='Book'
          backgroundColor='#292829'
        />
      </Link>
    </div>
  );
};

export default FlightDetails;
