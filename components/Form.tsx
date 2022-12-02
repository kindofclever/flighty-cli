import Link from 'next/link';
import Button from './Button';
import useStore from '../store/store';

const Form = () => {
  const { chosenFlightTo } = useStore();
  const handleDB = async () => {
    // Here is where id place a post request to the backend to update the flights
    // something like this: fetch('url', {method: 'POST'... etc})
    // and then redirect to the thankyou page
    console.log();
  };

  return (
    <form
      method='POST'
      action='https://formsubmit.co/sandra.gufler@appliedtechnology.se'
      className='w-[90%] md:w-[50%]'
    >
      <div className='text-md'>
        <div className='flex flex-col'>
          <input
            type='hidden'
            name='_next'
            value='http://localhost:9090/thankyou'
          />
          <input
            type='hidden'
            name='_subject'
            value='Booking from flighty'
          />
          <label
            className=' py-2'
            htmlFor='name'
          >
            Name and Surname
          </label>
          <input
            name='name'
            type='text'
            required
            className='border-4 rounded-xl p-3 w-full flex border-[#576ab9] outline-[#f31f51]'
          />
        </div>
        <div className='flex flex-col'>
          <label
            className=' py-2'
            htmlFor='phone'
          >
            Phone number
          </label>
          <input
            name='phone'
            type='number'
            className='border-4 rounded-xl p-3 w-full flex border-[#576ab9] outline-[#f31f51]'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <label
          className=' py-2'
          htmlFor='email'
        >
          E-Mail
        </label>
        <input
          name='email'
          type='email'
          required
          className='border-4 rounded-xl p-3 w-full flex border-[#576ab9] outline-[#f31f51]'
        />
      </div>
      <div className='flex flex-col'>
        <label
          className=' py-2'
          htmlFor='email'
        >
          Choose a payment method
        </label>
        <select
          name='anfragegrund'
          required
          className='border-4 rounded-xl p-4 w-full flex border-[#576ab9] outline-[#f31f51] decoration-none'
        >
          <option>Bill</option>
          <option>Good intentions</option>
          <option>Gold</option>
        </select>
      </div>
      <div className='flex flex-col mb-5'>
        <label
          className=' py-2'
          htmlFor='message'
        >
          Leave a message
        </label>
        <textarea
          name='message'
          required
          className='border-4 rounded-xl p-3 w-full flex border-[#576ab9] outline-[#f31f51]'
        />
      </div>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <Link href={`/flights/${chosenFlightTo}`}>
          <Button
            text='Back'
            backgroundColor='#292829'
          />
        </Link>
        <Link href='/thankyou'>
          <div onClick={handleDB}>
            <Button
              text='Confirm booking'
              backgroundColor='#292829'
            />
          </div>
        </Link>
      </div>
    </form>
  );
};

export default Form;
