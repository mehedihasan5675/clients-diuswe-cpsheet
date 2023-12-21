import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const admin = useAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <div className="bg-slate-100 p-5 h-full">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-slate-200 font-mono bg-gradient-to-l from-cyan-600 to-blue-600">
            {/* Sidebar content here */}
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="text-lg lg:text-2xl tracking-wide  text-yellow-100 font-semibold">
                  Admin Cpanel
                </h2>
                <img
                  src={user.photoURL}
                  title={user?.email}
                  className="w-9 cursor-pointer md:w-12  rounded-full"
                  alt=""
                />
              </div>
              <div className="mt-5 ">
                <p>{user?.displayName}</p>
                <p className="mt-1">{user?.email}</p>
              </div>
              <div></div>
              <div className="divider shadow-md shadow-yellow-100"></div>
            </div>
            <div className="text-white mt-5 tracking-wider font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-cpanel">Cpanel Home</Link>
              </li>
              <li>
                <Link to="/admin-cpanel/manage-student">
                  Manage Participants
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
