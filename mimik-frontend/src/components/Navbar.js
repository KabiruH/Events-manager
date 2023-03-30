import React from 'react';
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-full px-60">
      <div>
        <img src="/assets/logonobg.png" alt="logo" className="h-40"/>
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          <li>
          <i className="fa-sharp fa-solid fa-house mr-1"></i>Home
          </li>
          {/* <li>
            Events
          </li> */}
          <li>
          <i className="fa-solid fa-right-to-bracket mr-1"></i>Login
          </li>
          <li className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80">
          Signup<i className="fa-solid fa-arrow-right ml-1"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
