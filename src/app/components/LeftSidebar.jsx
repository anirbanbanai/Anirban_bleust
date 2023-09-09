import React from 'react';

import Link from 'next/link';
import NavLink from './NavLink';
import { RouteLinks } from '../utils/routegroup';
import Image from 'next/image';
const LeftSideBar = () => {
    return (
        <div className='text-black nn gap-4 rounded-lg p-4  h-4/4 sticky left-0 top-0 z-20 flex h-screen flex-col justify-between items-center  pb-5  max-md:hidden '>

         

            <div className='flex gap-3 items-center'>
            <Image alt='logo' src="/logo.svg" width={55} height={55}></Image>
            <h1 className='text-4xl font-bold max-lg:hidden'>Bleust</h1>
            </div>

            <div className='pt-10 flex w-full flex-1 flex-col gap-6 px-6  max-lg:items-center'>
 {
    RouteLinks.map(({route, name,icon, exact})=>(
        <NavLink exact={route === '/'} key={route} activeClassName="bg-red-500 px-5 py-1 rounded-xl flex gap-2" className="flex gap-2" href={route}> <h1 className='text-4xl'>{icon}</h1> <span className='text-2xl max-lg:hidden'>{name}</span> </NavLink>
    ))
 }

            </div>
            <Link href="/login">
            <button className='btn btn-warning rounded-3xl'>Login</button>
            </Link>
        </div>
    );
};

export default LeftSideBar;