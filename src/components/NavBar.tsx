import { faBed, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutReducer } from "../store/reducer/authSlice";
const NavBar = () => {
  const navigate = useNavigate();
  const selector = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="h-40 px-4 bg-[#003580] text-white flex flex-col items-center ">
      <div className="py-4 w-full max-w-[1024px] flex items-center justify-between ">
        <NavLink to="/">
          <span className="font-bold text-xl">Dooking.com</span>
        </NavLink>

        <div className="flex gap-4 md:hidden">
          <FontAwesomeIcon className="text-2xl" icon={faCircleUser} />
          <FontAwesomeIcon className="text-2xl" icon={faBars} />
        </div>
        {selector.isLogged ? (
          <div className="hidden md:flex">
            <div className="ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white">
              {`Hi,${selector.user.username}`}
            </div>
            <button
              onClick={() => {
                dispatch(logoutReducer(""));
              }}
              className="ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white"
            >
              登出
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white"
            >
              註冊
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="ml-5 px-4 py-2 text-sm text-[#003580] border border-[#003580] bg-white"
            >
              登入
            </button>
          </div>
        )}
      </div>
      <div className=" w-full max-w-[1024px] flex items-center justify-between ">
        <button className="px-4 py-2 flex items-center gap-2 border border-white rounded-xl ">
          <FontAwesomeIcon icon={faBed} /> <span>住宿</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
