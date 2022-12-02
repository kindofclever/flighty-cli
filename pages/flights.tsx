import { useEffect } from 'react';

import Header from '../components/Header';
import useStore from '../store/store';

import { ColorRing } from 'react-loader-spinner';

const Flights = () => {
  const {
    flights,
    from,
    to,
    go,
    back,
    adultsQuantity,
    minorQuantity,
    roundTrip,
    loading,
    setLoading,
    setFlights,
  } = useStore();

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      const res = await fetch(
        'http://localhost:9090/api/flights/filteredflights',
        {
          method: 'POST',
          body: JSON.stringify({
            from: from,
            to: to,
            go: go,
            back: back,
            roundTrip: roundTrip,
            adultsQuantity: adultsQuantity,
            minorQuantity: minorQuantity,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await res.json();
      setFlights(data.searchedFlights);
      setLoading(false);
    };
    fetchFlights();
    console.log(flights);
  }, [from, to, go, back, roundTrip, adultsQuantity, minorQuantity]);

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header
        title={`From ${from}`}
        span={`To ${to}`}
        description={`These are the available flights on ${new Date(
          go
        ).toDateString()}`}
      />
      {loading && (
        <div>
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
      )}
    </div>
  );
};

export default Flights;
