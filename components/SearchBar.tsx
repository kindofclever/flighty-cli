import { useEffect } from 'react';

import Button from './Button';
import FilterForInfo from './FilterForInfo';
import useStore from '../store/store';

import DatePicker from 'react-datepicker';
import Link from 'next/link';

const SearchBar = () => {
  const {
    from,
    setFrom,
    to,
    setTo,
    go,
    setGo,
    back,
    setBack,
    adultsQuantity,
    setAdultsQuantity,
    minorQuantity,
    setMinorQuantity,
    roundTrip,
    setRoundTrip,
    setLoading,
    flights,
    setFlights,
  } = useStore();

  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center'>
      <FilterForInfo
        label='From'
        value={from}
        optionValues={['Stockholm', 'Oslo', 'Amsterdam'].sort()}
        setState={setFrom}
      />

      <FilterForInfo
        label='To'
        value={to}
        optionValues={['Stockholm', 'Oslo', 'Amsterdam'].sort()}
        setState={setTo}
      />
      <div>
        <p>Adults</p>
        <input
          type='number'
          value={adultsQuantity}
          onChange={(e) => setAdultsQuantity(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <p>Minors</p>
        <input
          type='number'
          value={minorQuantity}
          onChange={(e) => setMinorQuantity(e.target.valueAsNumber)}
        />
      </div>
      <FilterForInfo
        label='Round Trip'
        value={roundTrip}
        optionValues={['no', 'yes']}
        setState={setRoundTrip}
      />
      <div className='text-md md:text-xl mr-3'>
        <p>Departure date</p>
        <DatePicker
          selected={new Date(go)}
          onChange={(date) => date && setGo(date.toISOString().split('T')[0])}
        />
      </div>
      {roundTrip === 'yes' && (
        <div className='text-md md:text-xl mr-3'>
          <p>Return date</p>
          <DatePicker
            selected={new Date(back)}
            onChange={(date) =>
              date && setBack(date.toISOString().split('T')[0])
            }
          />
        </div>
      )}
      <div className='fles justify-center items-center'>
        <Link href='/Flights'>
          <Button
            backgroundColor='#292829'
            text='Search'
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
