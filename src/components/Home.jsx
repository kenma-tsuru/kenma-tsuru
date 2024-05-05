import { NavLink, Outlet } from "react-router-dom";

export default function Home(){
    return (
    <>
        <NavLink to="contact">contact</NavLink> 
        <NavLink to="about">about</NavLink> 
        <Outlet/>
    </>);
}