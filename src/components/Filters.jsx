import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="relative shadow-md p-4 bg-white dark:bg-dark-blue dark:text-white rounded-sm"
        onClick={toggleDropdown}
      >
        Filter by Region <IoIosArrowDown className='inline ml-8' />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 flex flex-col gap-1 bg-white dark:bg-dark-blue dark:text-white p-4 rounded-sm shadow-md items-start">
          <button>Africa</button>
          <button>America</button>
          <button>Asia</button>
          <button>Europe</button>
          <button>Oceania</button>
        </div>
      )}
    </div>
  );
};

export default Filters;