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
      alert("you sus")
    });

  
  };

  return (
    <>
      <section className="text-black">
        <div className="container mx-auto pt-12 items-center px-5 py-12 lg:px-20">
            
      <h2 class="mt-6 ml-8 text-2xl font-medium text-left text-black">Sign in</h2>
          <div className="flex flex-col w-5/6 max-w-md p-8 mx-auto my-8 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
    </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium text-black"
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
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black bg-gray-50 focus:outline-none focus:border-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-base font-medium text-black"
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
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black bg-gray-50 focus:outline-none focus:border-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
                        className="w-4 h-4 mb-4 text-black border-black focus:ring-black"
                      />
                      <label
                        htmlFor="remember-me"
                        className="block ml-2 mb-4 text-xs text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                   
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full bg-black w-full hover:bg-[#404040] text-white font-semibold py-4 px-3 rounded focus:outline-none focus:shadow-outline"
                    >
                      SIGN IN
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
