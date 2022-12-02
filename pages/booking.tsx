import Head from 'next/head';
import Link from 'next/link';

import Form from '../components/Form';
import Header from '../components/Header';
import useStore from '../store/store';

const Booking = () => {
  const { chosenFlightBack } = useStore();

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <Head>
        <title>Flighty | Thank you</title>
      </Head>
      <Header
        title='See all the flight'
        span='details here'
        description='If you want to book this flight, fill in the form and click the button below'
      />
      <Form />
      <div className='flex justify-center items-center gap-5 mt-10'></div>
    </div>
  );
};

export default Booking;
