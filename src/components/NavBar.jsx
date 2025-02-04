import { BsMoon } from "react-icons/bs"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 lg:px-24 shadow-md bg-white dark:bg-dark-blue text-gray-800 dark:text-white">
        <h1 className="lg:text-2xl font-bold">Where in the world?</h1>
        <button className="flex items-center gap-2 text-sm font-medium"><BsMoon  className="font-bold"/> Dark Mode</button>
    </nav>

  )
}

export default NavBar