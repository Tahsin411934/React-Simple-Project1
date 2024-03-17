import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import "../../assets/Styles/Header.css";
const Header = () => {
  return (
    <div className="navbar lg:-mt-5 container mx-auto w-[90%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a className="text-white">Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>

        <h1 className="lg:text-4xl text-2xl font-bold text-[#150B2B]">
          Kitchen Kick
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[--li-color] text-lg font-normal">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="input h-[100%] bg-[--navSearchBg-color] p-2 lg:flex justify-center items-center mr-3 hidden">
          <div className="-mb-1">
            
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border-none ml-2 text-xl"
          />
        </div>
        <a className="btn  rounded-[50%] bg-[#0BE58A]">
          <FaRegUserCircle />
        </a>
      </div>
    </div>
  );
};

export default Header;
