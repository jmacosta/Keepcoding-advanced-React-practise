import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ className }) => {
  return (
    <>
      <Header classsName={className} />
      <Outlet />
      <Footer classsName={className} />
    </>
  );
};
export default Layout;
