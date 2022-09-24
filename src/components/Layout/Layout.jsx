import Box from '../Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';
import TrendComponend from '../TrendComponend';

const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
      <TrendComponend />
    </Box>
  );
};

export default Layout;
