import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h1>Hey Julia</h1>
            <Outlet></Outlet>
            <h1>I Loved You</h1>
           
            
        </div>
    );
};

export default MainLayout;