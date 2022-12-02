import { Dispatch, SetStateAction } from 'react';

interface FilterForInfoProps {
  label: string;
  setState: (from: string | number) => void;
  optionValues: string[];
  value: string | number;
}
const FilterForInfo: React.FC<FilterForInfoProps> = ({
  label,
  setState,
  optionValues,
  value,
}) => {
  return (
    <div className='text-md md:text-xl mr-3'>
      <p className=''>{label}</p>
      <select
        className='outline-none cursor-pointer mb-10 text-lg md:text-xl'
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={value}
      >
        {optionValues.map((value) => (
          <option
            key={Math.floor(Math.random() * 1000000)}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterForInfo;
