import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Cookies from 'js-cookie'
import axios from "axios";

import { login } from "../reducers/authReducer";
import logo from "../assets/oowlish.png";
import { useForm } from "../hooks/useForm";
import { Login } from "../interfaces/Login";

const initialState: Login = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [alert, setAlert] = useState(false);

  const {
    form: { username, password },
    handleChange,
  } = useForm(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username: username,
        password: password,
      });
      const token = response?.data?.token;
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
      dispatch(login({ username, userId: response.data.userId }));
      setAlert(false);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setAlert(true);
        }
      }
      console.error("Login error", error);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        style={{ backgroundColor: "#ff931e" }}
      >
        <div className="z-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2/5 w-full rounded-lg overflow-hidden shadow-lg bg-white mx-4 md:mx-0">
          <div className="flex h-full">
            <div className="hidden md:flex w-1/2 items-center justify-center">
              <img
                src={logo}
                alt="Company Logo"
                className="max-h-40 mix-blend-multiply"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full"
              >
                <h2
                  className="text-xl md:text-2xl font-bold mb-4 text-center"
                  style={{ color: "#ff931e" }}
                >
                  Employee Portal
                </h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleChange}
                  />
                  {alert && (
                    <span style={{ color: "red" }}>
                      *** Invalid Credentials
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={password}
                    onChange={handleChange}
                  />
                  {alert && (
                    <span style={{ color: "red" }}>
                      *** Invalid Credentials
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
