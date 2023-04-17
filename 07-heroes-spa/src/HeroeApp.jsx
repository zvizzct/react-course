import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components/Navbar';

export const HeroeApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
