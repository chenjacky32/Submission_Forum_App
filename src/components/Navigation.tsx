import { asyncGetProfileAction } from '../states/authUser/action';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import NavigationItem from './NavigationItem';
import { Navbar, Collapse, Typography, Button, IconButton } from '@material-tailwind/react';
import ProfileItem from './ProfileItem';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { RootState } from '../states';
import { Link } from 'react-router-dom';

export const RequiredDefaultProps = {
  onPointerEnterCapture: '',
  onPointerLeaveCapture: '',
};

export default function Navigation() {
  const { profile, isLogin } = useSelector((state: RootState) => state.auth);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const dispatch = useDispatch();

  const toggleIsNavOpen = () => setIsNavOpen((currentNavigation) => !currentNavigation);

  React.useEffect(() => {
    if (isLogin) {
      dispatch(asyncGetProfileAction());
    }
  }, [dispatch, isLogin]);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <>
      <LoadingBar />
      <Navbar fullWidth={true} className="p-6 mx-auto text-black bg-neutral-100" variant="filled" placeholder="" {...RequiredDefaultProps}>
        <div className="relative flex items-center mx-auto justify-beetween gap-x-3 text-blue-gray-900">
          <Typography className="cursor-pointer py-1.5 font-bold text-3xl text-indigo-700" onPointerEnterCapture="" onPointerLeaveCapture="" placeholder="">
            Forum App
          </Typography>
          <div className="hidden lg:block lg:ml-auto">
            <NavigationItem />
          </div>
          <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden" placeholder="" {...RequiredDefaultProps}>
            <Bars2Icon className="w-6 h-6" />
          </IconButton>
          {isLogin ? (
            <ProfileItem name={profile?.name} avatar={profile?.avatar} />
          ) : (
            <Button size="sm" variant="text" className="lg:" placeholder="lg:ml-auto" {...RequiredDefaultProps}>
              <Link to="/login">Login here</Link>
            </Button>
          )}
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavigationItem />
        </Collapse>
      </Navbar>
    </>
  );
}
