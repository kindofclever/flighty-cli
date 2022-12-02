import { useEffect } from 'react';

import Header from '../../components/Header';
import useStore from '../../store/store';

import { ColorRing } from 'react-loader-spinner';
import Head from 'next/head';
import FlightCard from '../../components/FlightCard';

const Flights = () => {
  const {
    from,
    to,
    go,
    loading,
    setLoading,
    setFlightsTo,
    flightsTo,
    roundTrip,
  } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //   Trying to get mocked data
      const res = await fetch(
        'http://localhost:9090/api/flights/filteredflights',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: from,
            to: to,
            adultsQuantity: 1,
            minorQuantity: 0,
            go: go,
            back: '2022-12-13',
            roundTrip: roundTrip,
          }),
        }
      );
      const data = await res.json();
      setFlightsTo(data.flightsTo);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='flex justify-center items-center flex-col'>
      <Head>
        <title>Flighty | Flights</title>
      </Head>
      <Header
        title={`From ${from}`}
        span={`To ${to}`}
        description={`These are the available flights on ${new Date(
          go
        ).toDateString()}`}
      />
      <div className='flex flex-col justify-center items-center'>
        {loading ? (
          <div className='flex flex-col justify-center items-center'>
            <ColorRing
              visible={true}
              height='80'
              width='80'
              ariaLabel='blocks-loading'
              wrapperStyle={{}}
              wrapperClass='blocks-wrapper'
              colors={['#576ab9', '#576ab9', '#576ab9', '#576ab9', '#576ab9']}
            />
            <p>Loading flights...</p>
          </div>
        ) : (
          <div className='grid md:grid-cols-3 w-[400px] md:w-[1500px] h-[200px] md:h-[370px] gap-5 m-10'>
            {flightsTo.map((flight: any) => (
              <FlightCard
                from={flight.depatureDestination}
                to={flight.arrivalDestination}
                go={flight.depatureAt}
                there={flight.arriveAt}
                flightNumber={flight.flightNumber}
                seats={flight.avaliableSeats}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;
