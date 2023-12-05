import React, { useContext } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  Avatar,
} from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 shadow-none">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal lg:px-6"
      >
        <NavLink
          to="/"
          className={({ isPending, isActive }) =>
            isPending
              ? ''
              : isActive
              ? 'text-fontActive'
              : 'text-[16px] leading-[24px] text-fontColor font-normal font-inter'
          }
        >
          Home
        </NavLink>
      </Typography>
      {/*  */}

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal lg:px-6"
      >
        <NavLink
          to="/hospitality"
          className={({ isPending, isActive }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-fontActive'
              : 'text-[16px] leading-[24px] text-fontColor font-normal font-inter'
          }
        >
          Our Hospitality
        </NavLink>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal lg:px-6"
      >
        <NavLink
          to="/patientReviews"
          className={({ isPending, isActive }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-fontActive'
              : 'text-[16px] leading-[24px] text-fontColor font-normal font-inter'
          }
        >
          Patient Reviews
        </NavLink>
      </Typography>
    </List>
  );
}

function NavbarItem() {
  const context = useContext(AppContext);
  const { user, logOut } = context;

  const photoUrl = user?.photoURL;
  const displayName = user?.displayName;

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full px-20 py-2 bg-[#eceadd] shadow-none border-4 border-white">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex justify-center items-center gap-4"
        >
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/ogg.jpg"
            alt=""
            className="border rounded-full"
            width="100px"
          />
          <span className="text-fontActive">Humanity health community</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {/* <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button> */}
          <div className="flex justify-center items-center gap-4">
            {displayName && (
              <p className="font-inter text-fontColor leading-[30px] uppercase font-bold">
                {displayName}
              </p>
            )}

            {user && user.photoURL && (
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src={photoUrl}
              />
            )}
          </div>

          {user ? (
            <Button
              onClick={handleLogOut}
              size="sm"
              className="text-[#183282] bg-colorOne border border-[#FF9A63] text-[16px] leading-[24px] font-medium hover:shadow-none"
            >
              Log Out
            </Button>
          ) : (
            <Link to="/login">
              <Button
                size="sm"
                className="text-[#183282] bg-colorOne border border-[#FF9A63] text-[16px] leading-[24px] font-medium hover:shadow-none"
              >
                LogIn
              </Button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {/* <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Sign In
          </Button> */}

          <div className="flex justify-center items-center gap-4">
            {displayName && (
              <p className="font-inter text-fontColor leading-[30px] uppercase font-bold">
                {displayName}
              </p>
            )}

            {user && user.photoURL && (
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src={photoUrl}
              />
            )}
          </div>

          {user ? (
            <Button
              onClick={handleLogOut}
              size="sm"
              className="text-[#183282] bg-colorOne border border-[#FF9A63] text-[16px] leading-[24px] font-medium hover:shadow-none"
            >
              Log Out
            </Button>
          ) : (
            <Link to="/login">
              <Button
                size="sm"
                className="text-[#183282] bg-colorOne border border-[#FF9A63] text-[16px] leading-[24px] font-medium hover:shadow-none"
              >
                LogIn
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarItem;
