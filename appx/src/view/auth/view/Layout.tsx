import  { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div className="w-full h-screen p-6 box-border bg-red-500">
            <Outlet />
        </div>
    )
}