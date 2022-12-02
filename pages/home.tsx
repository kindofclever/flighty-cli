import Head from 'next/head';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Flighty | Search</title>
      </Head>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <Header
          title='Find what you are'
          span='looking for'
          description='Use the searchbar to filter the flights, if there are flights available a button will appear'
        />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
