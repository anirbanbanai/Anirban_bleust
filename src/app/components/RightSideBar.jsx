import Link from 'next/link';
import React from 'react';
import { BiHome } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbDashboard } from 'react-icons/tb';
import { RouteLinks } from '../utils/routegroup';
import NavLink from './NavLink';
import Image from 'next/image';

const RightSideBar = () => {
    return (
        <div className='fixed top-0 z-10 w-full  bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden nnn'>
            <div className='flex justify-between items-center p-3'>
            <Image alt='logo' src="/logo.svg" width={55} height={55}></Image>
                {
                    RouteLinks.map(({route,icon, exact})=>(
                        <NavLink activeClassName="bg-red-500 px-3 p-2 rounded-xl" href={route} exact={route ==="/"} key={route}><h1 className='text-2xl bg-blue-100 rounded-3xl p-3'>{icon}</h1></NavLink>
                    ))
                }
           

            <Link href="/login">
            <button className='btn btn-warning rounded-3xl'>Login</button>
            </Link>
            </div>
            
        </div>
    );
};

export default RightSideBar;