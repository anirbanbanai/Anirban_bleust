import { BiAbacus } from "react-icons/bi";
import { BiHome } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbDashboard } from 'react-icons/tb';
import { BsPeopleFill } from 'react-icons/bs';

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
       icon: <TbDashboard/>
    },
    {
       route: "/member",
       name: "Member",
       icon: <BsPeopleFill/>
    },
]