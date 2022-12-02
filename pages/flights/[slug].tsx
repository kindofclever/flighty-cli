import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '../../components/Button';
import useStore from '../../store/store';
import Header from '../../components/Header';

const FlightDetails = () => {
  const router = useRouter();
  const flightNr = router.query.slug;

  const { flightsTo, setDetailFlight, detailFlight } = useStore();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     //   Trying to get mocked data
  //     const res = await fetch(
  //       'http://localhost:9090/api/flights/filteredflights',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           from: 'Oslo',
  //           to: 'Stockholm ',
  //           adultsQuantity: 1,
  //           minorQuantity: 0,
  //           go: '2022-12-12',
  //           back: '2022-12-13',
  //           roundTrip: 'yes',
  //         }),
  //       }
  //     );
  //     const data = await res.json();
  //     setDetailFlight(
  //       data.flightsTo.find((flight: any) => flight.flightNumber === flightNr)
  //     );
  //   };
  //   fetchData();
  // }, [flightNr]);

  const detailFlightData = flightsTo.find(
    (flight: { flightNumber: string | string[] | undefined }) =>
      flight.flightNumber === flightNr
  );

  console.log(detailFlightData);

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
        <p>{detailFlightData?.availableSeats}</p>
      </div>

      <Link href='/booking'>
        <Button
          text='Book this flight'
          backgroundColor='#292829'
        />
      </Link>
    </div>
  );
};

export default FlightDetails;
