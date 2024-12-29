import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdLeaderboard, MdForum } from 'react-icons/md';
import { Typography, MenuItem } from '@material-tailwind/react';
import { RequiredDefaultProps } from '../components/Navigation';

const navListItems = [
  {
    label: 'Forum',
    icon: MdForum,
    redirect: '/',
  },
  {
    label: 'Leaderboards',
    icon: MdLeaderboard,
    redirect: '/leaderboards',
  },
];

export default function NavigationItem() {
  return (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, redirect }, key) => (
        <Typography key={label} className="text-lg font-semibold text-indigo-400 " {...RequiredDefaultProps} placeholder="">
          <MenuItem className="flex items-center gap-2 lg:rounded-full" placeholder="" {...RequiredDefaultProps}>
            {React.createElement(icon, { className: 'h-[20px] w-[20px] text-indigo-400' })}{' '}
            <Link to={`${redirect}`} className="text-indigo-300">
              {' '}
              {label}
            </Link>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
