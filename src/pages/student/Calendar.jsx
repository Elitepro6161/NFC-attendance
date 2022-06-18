import axios from 'axios';
import React, { useState, useEffect} from 'react'
import Wrapper from '../../components/Wrapper'

const StudentCalendar = () => {
    const [date,setDate] = useState(new Date().toISOString().split('T')[0]);
    const [data,setData] = useState({
        recent: [],
        loading: true,
    });


    useEffect(() => {
        fetchDate()
    },[date])

  console.log(date)
  
    const fetchDate = async() => {
        console.log("date meopw",date)
        axios.get(`https://languid-jewel-production.up.railway.app/attend/{str}?name=${localStorage.getItem("username")}&date=${date}`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
        }}).then((res) => {
            console.log(res.data)
            setData({
                recent: res.data,
                loading:false
            })
        })
        .catch((error) => console.log(error))
    }

    // fetchDate()
    const InputDate = () => (
        <>
        <div className="flex">
            <input datepicker className='p-4 mx-auto mb-6 bg-white rounded-lg ' type="date" value={date}
            onChange={(e) => setDate(e.target.value)} />
        </div>
        </>
    )

    const Table = () => (
        <div className="relative w-5/6 mx-auto lg:w-3/4 overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-lg text-black bg-[#D9D9D9] tracking-wide">
                <tr>
                   
                  
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                  
                </tr>
            </thead>
            <tbody>
                {data?.recent?.map((item,index) => (
                <tr key={index} className="bg-white border-b  hover:bg-gray-50">
                    
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 ">
                        {item.date_time}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 ">
                        {item.status_now ? 'Present' : 'Absent'}
                    </td>
                </tr>
                ))}
              
            </tbody>
        </table>
    </div>

    )
    return(
        <>
        <Wrapper>
            <div className='mx-auto item-center p-4'>
            <InputDate/>
            {data?.loading ? <div className='text-center'>Loading...</div> : <Table/>}
            </div>

        </Wrapper>
        </>
    )
}





export default StudentCalendar