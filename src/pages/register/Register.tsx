import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegiserMutation } from "../../store/authApi";

const Register = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const navigate = useNavigate();
  const [register, { isError }] = useRegiserMutation();

  const registerHandler = async () => {
    try {
      const res: any = await register({
        username: username,
        password: password,
        email: email,
      });
      !res.error && alert("註冊成功");
      !res.error && navigate("/login");
    } catch (err) {
      alert("註冊失敗");
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F2F2F2]">
      <div className=" px-8 py-10 w-[350px] flex flex-col gap-6 bg-[#0071c2]">
        <h1 className="text-center text-white font-bold text-2xl">註冊帳號</h1>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          className=" p-2 border-none"
          placeholder="請輸入信箱"
        />
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
            registerHandler();
          }}
          className="p-2 bg-white border-none text-[#0071c2]"
        >
          註冊
        </button>
        <p className="text-white">
          已有帳號?
          <span
            className="text-red-500 cursor-pointer font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            前往登入
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

export default Register;
