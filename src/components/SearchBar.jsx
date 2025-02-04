import { IoMdSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <label className="flex items-center gap-2 bg-white dark:bg-dark-blue dark:text-white p-4 pr-14 rounded-sm shadow-md text-[#858585] w-auto lg:w-[40%]">
        <IoMdSearch className="text-2xl" />
        <input className="outline-none " type="text" placeholder="Search for a country..." />
    </label>
  )
}

export default SearchBar