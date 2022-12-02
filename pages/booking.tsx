import Link from 'next/link';

import Button from '../components/Button';
import Header from '../components/Header';

const Booking = () => {
  return (
    <div>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, click the button below'
      />
      <div className='flex flex-col justify-center items-center'>
        <Link href='/thankyou'>
          <Button
            text='Confirm booking'
            backgroundColor='#292829'
          />
        </Link>
      </div>
    </div>
  );
};

export default Booking;
