import { FaRegPaperPlane } from 'react-icons/fa';

interface HeaderProps {
  title: string;
  span: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, span, description }) => {
  return (
    <div className='flex flex-col justify-center items-center w-[200px] md:w-full select-none text-center'>
      <h1 className='text-[#576ab9] text-center text-2xl md:text-7xl flex flex-col md:flex-row justify-center items-center'>
        {title}
        <div className='flex flex-col md:flex-row justify-center items-center text-center'>
          <span className='uppercase text-[#f31f51] m-5'>{span}</span>
          <FaRegPaperPlane
            className='text-[#f31f51]'
            size={40}
          />
        </div>
      </h1>
      <p className='text-lg md:text-2xl p-2 mt-1 mb-5 text-center'>
        {description}
      </p>
    </div>
  );
};

export default Header;
