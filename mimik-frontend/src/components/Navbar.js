import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";

function Navbar() {
  const auth = useAuthContext();

  const isAuth = auth?.user || null;

  const logOut = () => {
    auth.logOut();
  };
  return (
    <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-full px-60">
      <div>
        <img src="/assets/logonobg.png" alt="logo" className="h-40" />
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          <li>
            {" "}
            <Link to="/">
              <i className="fa-sharp fa-solid fa-house mr-1"></i>Home
            </Link>{" "}
          </li>
          {isAuth ? (
            <>
              {" "}
              <li>
                {" "}
                <Link to="/events">
                  <i className="fa-regular fa-calendar-days mr-1"></i>Events
                </Link>{" "}
              </li>{" "}
              <li
                onClick={logOut}
                className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80 cursor-pointer"
              >
                {" "}
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Logout
              </li>
            </>
          ) : null}

          {!isAuth ? (
            <>
              {" "}
              <li>
                {" "}
                <Link to="/signIn">
                  <i className="fa-solid fa-right-to-bracket mr-1"></i>Login
                </Link>{" "}
              </li>
              <li className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80">
                {" "}
                <Link to="/signUp">
                  Signup<i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>{" "}
              </li>{" "}
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;