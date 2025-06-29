import  { Outlet } from 'react-router-dom'

export default function RootLayout(){
    return (
        <div className="w-full h-screen">
            <Outlet></Outlet>
        </div>
    )
}