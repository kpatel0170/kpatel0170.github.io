import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "resume.pdf",
      title: "Resume",
    },
  ];

  return (
    <div className="mb-5 md:mb-10">
      <div className="container px-5 md:px-10 mx-auto relative font-poppins flex items-center justify-between py-8">
        <div>
          <h2 className="text-2xl">@kpatel0170</h2>
        </div>

        <div className="">
          <ul
            className={`${
              menu
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            } flex items-center gap-8 lg:opacity-100 lg:max-h-[500px] capitalize absolute lg:relative top-[80px] right-[20px] p-[20px] lg:p-0 lg:top-0 bg-black z-50 flex-col lg:flex-row rounded-xl lg:w-auto sm:w-full-conten lg:justify-center transition-all duration-500 overflow-hidden sm:w-auto sm:justify-normal`}
          >
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`/${item.id}`} className="font-[500]">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Icon here - burger menu */}
          <button
            className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none transition-colors duration-300 ease-in-out"
            onClick={() => setMenu(!menu)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
