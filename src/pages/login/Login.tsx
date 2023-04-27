import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/authApi";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../store/reducer/authSlice";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const [login, { isError }] = useLoginMutation();
  const dispatch = useDispatch();

  const loginHandler = async () => {
    try {
      const res: any | loginData = await login({
        username: username,
        password: password,
      });

      dispatch(
        loginReducer({ token: res.data.token, user: res.data.otherDetails })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F2F2F2]">
      <div className=" px-8 py-10 w-[350px] flex flex-col gap-6 bg-[#0071c2]">
        <h1 className="text-center text-white font-bold text-2xl">登入帳號</h1>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          className=" p-2 border-none"
          placeholder="請輸入帳號"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          className=" p-2 border-none"
          placeholder="請輸入密碼"
          type="password"
        />
        <button
          onClick={() => {
            loginHandler();
          }}
          className="p-2 bg-white border-none text-[#0071c2]"
        >
          登入
        </button>
        <p className="text-white">
          尚未註冊帳號?
          <span
            className="text-red-500 cursor-pointer font-bold"
            onClick={() => {
              navigate("/register");
            }}
          >
            前往註冊
          </span>
          ，或
          <span
            className="text-red-500 cursor-pointer font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            返回首頁
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
