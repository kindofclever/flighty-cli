import Link from 'next/link';

import Button from '../components/Button';
import Header from '../components/Header';
import useStore from '../store/store';

const Booking = () => {
  const { chosenFlightTo, flightsTo, flightsBack, chosenFlightBack } =
    useStore();

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, fill in the form and click the button below'
      />
      <h3>Flight information:</h3>
      {}
      <div className='flex justify-center items-center gap-5'>
        <Link href={`/flights/${chosenFlightTo}`}>
          <Button
            text='Back'
            backgroundColor='#292829'
          />
        </Link>
        <Link href='/thankyou'>
          <Button
            text='Send Infos and confirm booking'
            backgroundColor='#292829'
          />
        </Link>
      </div>
    </div>
  );
};

export default Booking;
