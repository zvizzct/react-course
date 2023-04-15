import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';
export const MainApp = () => {
  return (
    <>
      <UserProvider>
        {/* <h1>Main App</h1> */}
        <Navbar />
        <hr />
        <br />
        <Outlet />
      </UserProvider>
    </>
  );
};
