import React, { useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper";

import { useNavigate } from "react-router-dom";

import axios from "axios";
const StudentProfile = () => {
  const [data, setData] = useState({
    recent: [],
    loading: true,
  });
  const navigate = useNavigate();


  useEffect(() => {
    fetchDetails();
    return () => {
      fetchDetails();
    };
  }, []);

  const fetchDetails = () => {
    axios
      .get("https://languid-jewel-production.up.railway.app/user/3", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData({
          recent: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const InputBox = ({ text, value }) => (
    <>
      <div className="flex">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {text}
        </label>
      </div>
      <div className="flex">
        <input
          readOnly
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          id="inline-full-name"
          type="text"
          value={value}
        />
      </div>
    </>
  );
  const ProfileContent = () => (
    <form className="w-full mx-auto py-4 max-w-sm">
      <div className="mx-auto  py-12 p-4">
        <InputBox text={"Name"} value={data.recent.name} />

        <InputBox text={"Role"} value={data.recent.role} />
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </form>
  );

  return (
    <>
      <Wrapper>
        {data?.loading ? <div>Loading...</div> : <ProfileContent />}
      </Wrapper>
    </>
  );
};

export default StudentProfile;
