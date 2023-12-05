import { Outlet } from 'react-router-dom';
import NavbarItem from '../components/navbar';

const MainLayout = () => {
  return (
    <div className="font-inter">
      <NavbarItem />
      <Outlet />
    </div>
  );
};

export default MainLayout;
