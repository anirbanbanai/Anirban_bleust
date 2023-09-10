
import { BiHome } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPeopleFill } from 'react-icons/bs';
import { IoCreateOutline } from 'react-icons/io5';

export const RouteLinks=[
    {
       route: "/",
       name: "Home",
       icon: <BiHome/>
    },
    {
       route: "/dashboard",
       name: "Dashboard",
       icon: <LuLayoutDashboard/>
    },
    {
       route: "/create",
       name: "Create",
       icon: <IoCreateOutline/>
    },
    {
       route: "/member",
       name: "Member",
       icon: <BsPeopleFill/>
    },
]