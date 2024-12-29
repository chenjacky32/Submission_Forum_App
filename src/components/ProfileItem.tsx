import { UserCircleIcon, LifebuoyIcon, PowerIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import { Menu, MenuHandler, Button, MenuList, Avatar, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { RequiredDefaultProps } from './Navigation';

const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
    clickEvent: () => navigate('/users/me'),
  },
  {
    label: 'Help',
    icon: LifebuoyIcon,
    clickEvent: () => navigate('/'),
  },
  {
    label: 'Log Out',
    icon: PowerIcon,
    clickEvent: () => {
      console.log('logout');
    },
  },
];

export default function ProfileItem({ name, avatar }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto" placeholder="" {...RequiredDefaultProps}>
          <Avatar variant="circular" size="sm" alt={name} className="border border-gray-900 p-0.5" src={avatar} placeholder={name} {...RequiredDefaultProps} />
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1" placeholder="" {...RequiredDefaultProps}>
        {profileMenuItems.map(({ label, icon, clickEvent }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Button
              key={label}
              variant="text"
              onClick={clickEvent}
              placeholder={label}
              className={`flex items-center gap-2 rounded ${isLastItem ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10' : ''}`}
              {...RequiredDefaultProps}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" placeholder="" className="font-normal" color={isLastItem ? 'red' : 'inherit'} {...RequiredDefaultProps}>
                {label}
              </Typography>
            </Button>
          );
        })}
      </MenuList>
    </Menu>
  );
}
