import Link from 'next/link';

import Header from './Header';
import Button from './Button';

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center justify-center h-screen bg-clouds bg-cover bg-no-repeat'>
      <div className='bg-[#fefdfe] py-10 px-20 rounded-xl flex flex-col justify-center items-center'>
        <Header
          title='Welcome to '
          description='Find the flight of your dreams!'
          span=' Flighty'
        />
        <Link href='/home'>
          <div className='animate-bounce'>
            <Button
              backgroundColor='#292829'
              text='Check it out'
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
