import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";

const Mainlayout = () => {
    return (
        <>
            <div><Header></Header></div>
            <div className="px-6 py-3"><Outlet></Outlet></div>
        </>
    );
};

export default Mainlayout;