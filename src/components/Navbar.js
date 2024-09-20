import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#363636] z-50">
      <div className="navbar w-11/12 mx-auto flex">
        <div className="navbar-start w-full md:w-auto flex justify-between md:justify-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <details>
                  <summary>Home</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Event</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Contact</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Blog</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-lg py-2 text-white mx-8">
                    Home
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg py-2 text-white mx-8">
                    Event
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg py-2 text-white mx-8">
                    Contact
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg py-2 text-white mx-8">
                    Blog
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu1</a>
                    </li>
                    <li>
                      <a>Submenu2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end w-full md:w-auto flex justify-between md:justify-end mt-4 md:mt-0">
          <div className="relative flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full w-full md:w-72 py-3 px-5 bg-white"
            />
            <BsSearch className="text-xl font-extrabold absolute right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
