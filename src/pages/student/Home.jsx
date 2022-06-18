import React, { useState, useEffect } from "react";
import Wrapper from '../../components/Wrapper';
import { PendingIcon,TickIcon } from "../../components/Assets";
import axios from "axios";
const StudentHome = () => {
  const [data, setData] = useState({
    recent: [],
    loading: true,
  });
  const [recent,setRecent]=useState();
  const [date,setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetchDetails();
    return () => {
      fetchDetails();
    };
  }, []);
  const fetchDate = async() => {
    console.log("date meopw",date)
    await axios.get(`https://languid-jewel-production.up.railway.app/attend/{str}?name=${localStorage.getItem("username")}&date=${date}`,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
    }}).then(async(res) => {
        console.log(res.data)
        await data?.recent?.map((item,index)=>console.log(item))
    })
    .catch((error) => console.log(error))
}
  const fetchDetails = () => {
    axios
      .get(`https://languid-jewel-production.up.railway.app/user/${localStorage.getItem('email')}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(async(res) => {
        await localStorage.setItem("username",res?.data?.name)
        console.log(res);
        
        await setData({
          recent: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return(
        <>
        <Wrapper>
        <div className='text-2xl mx-auto text-center pt-12'>
            <h3 className=' ml-8 text-2xl font-medium text-left text-black'>Hello {data.recent.name}</h3>
            <p className='ml-8 mt-1 text-sm font-medium text-left text-[#404040]'>Today's Attendance</p>
            <div className='m-auto mt-10 w-5/6 max-w-lg h-auto p-8 rounded-2xl bg-white'>
            <div className='text-xl text-left flex items-center p-2 font-light text-black'>
              <span className="mr-4">
                  <PendingIcon></PendingIcon>
              </span>Attendance {data.recent.status_now ? 'Sucess' : 'Pending'}</div>
                <div className='text-sm font-medium text-left m-6' >
                Name: {data.recent.name}
                <br />
                Reg number:{data.recent.roll} 
                <br />
                Date: {date}
                </div>
                <button className="bg-black w-auto text-sm hover:bg-[#404040] text-white font-semibold p-4 rounded focus:outline-none focus:shadow-outline">
                     DOWNLOAD ATTENDANCE
                </button>
            </div>
        </div>
        </Wrapper>
        </>
    )

}


export default StudentHome