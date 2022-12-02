import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <Head>
        <title>Flighty | Search</title>
      </Head>
      <div className=' flex flex-col justify-center items-center'>
        <Header
          title='Find what you are'
          span='looking for'
          description='Use the searchbar to filter the flights, if there are flights available a button will appear'
        />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <SearchBar />
          </div>
          <div className='flex justify-center items-center gap-5 '>
            <Link href='/'>
              <Button
                text='Back'
                backgroundColor='#292829'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
