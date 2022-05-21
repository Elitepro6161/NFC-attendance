import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = formData;
    var bodyFormData = new FormData();
    await bodyFormData.append("username", email);
    await bodyFormData.append("password", password);
    console.log(bodyFormData);
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    await axios({
      method: "post",
      url: "https://languid-jewel-production.up.railway.app/login",
      data: bodyFormData,
    }).then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.access_token);
      let role = res?.data?.role
      localStorage.setItem("role", role);
      localStorage.setItem("email",email)
      if(role.includes('teach'))
      {
          navigate('/faculty')
      } 
      if(role.includes('student'))
      {
          navigate('/student')
      }
    }).catch(err => {
      console.log(err);
      alert("you suck")
    });

  
  };

  return (
    <>
      <section className="text-blue-700">
        <div className="container mx-auto pt-12 items-center px-5 py-12 lg:px-20">
            
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign in to your account</h2>
    </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        value={formData?.email}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                          }
                        value={formData?.password}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="block ml-2 text-sm text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                   
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
