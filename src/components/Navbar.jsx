import logo from "../assets/logo.png"

const Navbar = () => {

const links = <>
  <li><a href="#home">Home</a></li>
  <li><a href="#howto">How To Work</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#pricing">Pricing</a></li>
  <li><a href="#faq">FAQ</a></li>
</>


  return (
    <div className="bg-black text-white sticky top-0 right-0 z-50">
      <div className="navbar  container mx-auto shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="object-cover w-8 h-8" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#D9D9D9]">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-primaryColor cursor-pointer text-white p-1 rounded-lg ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar