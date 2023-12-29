import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slice/accountSlice";
import { API_CALL } from "../../helper";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataAccount = useSelector((state) => {
    return state.accountSlice;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [inUsername, setInUsername] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");

  const onLogin = async () => {
    if (inUsername === "" && inPassword === "") {
      alert("Tabel input mohon diisi");
    } else if (inUsername !== "" && inPassword === "") {
      alert("Tabel password mohon diisi");
    } else if (inUsername === "" && inPassword !== "") {
      alert("Tabel username mohon diisi");
    } else if (inUsername !== "" && inPassword !== "") {
      const response = await API_CALL.post("/account/login", {
        username: inUsername,
        password: inPassword,
      });
      if (response) {
        alert("Succes Login");
      } else {
        alert("Akun tidak ada, harap register terlebih dahulu");
      }
      console.log(response.data);
      localStorage.setItem("tokenAccount", response.data.result.token);
      dispatch(login(response.data.result));
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center align-center bg-gray-100">
        <div className="bg-white p-10 rounded-[20px] shadow-md w-[30%] h-[60%] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
          <form className="w-[90%]">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full h-16 border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
                onChange={(e) => setInUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Password
              </label>
              <input
                type={isVisible ? "text" : "password"}
                className="w-full h-16 border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline pr-12"
                onChange={(e) => setInPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-[53px] h-8 w-8 right-2.5 flex items-center cursor-pointer justify-center align-center"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <FaEyeSlash size={26} className="text-gray-400" />
                ) : (
                  <FaEye size={24} className="text-gray-400" />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md w-full h-12 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              onClick={onLogin}
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
