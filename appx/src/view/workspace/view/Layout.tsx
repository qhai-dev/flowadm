import { Outlet } from "react-router-dom";

export  default  function Layout(){
    return (
        <div>
            workspace layout page

            <Outlet />
        </div>
    )
}