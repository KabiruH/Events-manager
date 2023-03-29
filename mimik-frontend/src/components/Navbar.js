function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-1/2 mx-auto">
      <div>
        <img src="mimik-frontend/assets/mimik-logo.png" alt="logo"/>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            Home
          </li>
          {/* <li>
            Events
          </li> */}
          <li>
            Login
          </li>
          <li>
            Signup
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
