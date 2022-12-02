import Link from 'next/link';

import Button from '../components/Button';
import Header from '../components/Header';

const FlightDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, click the button below'
      />
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
