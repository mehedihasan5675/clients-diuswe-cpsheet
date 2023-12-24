import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";

const Mainlayout = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="bg-white h-screen">
        <div className="md:px-6 p-3 md:py-3">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Mainlayout;
