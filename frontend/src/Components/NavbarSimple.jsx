import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* About - scrolls smoothly to bottom of page */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="flex items-center transition-colors cursor-pointer hover:text-blue-500"
        >
          About
        </a>
      </Typography>

      {/* Docs - placeholder href, update later */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="https://github.com/Aaditya-0701/symptoms-agent-project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-colors cursor-pointer hover:text-blue-500"
        >
          Github
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth >= 960) setOpenNav(false);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 z-50 w-full px-6 py-3 mx-auto my-auto mb-2 shadow-none bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Hospital Agent
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation menu"
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
