import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const Header = () => {
  const {user,logOut,loading,reload,setReload,providerGoogle}=useContext(AuthContext)
  const navigate=useNavigate()
  const isAdmin=useAdmin()
  const navList=
  < >
    <li ><Link>Individual-Contest</Link></li>
   
        
  {
    user && isAdmin ? <li><Link to="/admin-cpanel">Cpanel</Link></li>:""
  }
           
        
  
  </>

  const handleGoogleLogin=()=>{
    providerGoogle()
    .then(()=>{
      navigate('/admin-cpanel')
    })
    .catch(()=>{
    })
  }

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
navigate('/')
    })
    .catch(()=>{

    })
  }
    return (
        <>
           <div className="navbar  bg-gradient-to-t from-cyan-600 to-blue-700">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-slate-200 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-mono">
      {navList}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-sm lg:text-xl text-slate-200 font-mono">SWE C.Tracker </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-slate-200 font-mono">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {
          user? <div className="w-9 md:w-10 rounded-full">
          <img className="" title={user?.email} src={user?.photoURL} />
        </div>:<div className="w-9 md:w-10 rounded-full">
          <img className="" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        }
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-mono">
        <li className="">
          <a className="justify-between">
            Profile
            <span className="badge">dashboard</span>
          </a>
        </li>
        {
          user ?<li onClick={handleLogOut}><a className="cursor-pointer">Logout</a></li>  : <li onClick={handleGoogleLogin}><a className="cursor-pointer ">Login With Google</a></li> 
        }
        
        
      </ul>
    </div>
  </div>
</div>
        </>
    );
};

export default Header;