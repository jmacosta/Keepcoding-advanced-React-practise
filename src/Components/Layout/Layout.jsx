import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ className }) => {
  return (
    <>
      <Header className={className} />
      <Outlet />
      <Footer className={className} />
    </>
  );
};
export default Layout;
