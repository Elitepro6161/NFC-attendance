import React,{ useState,useEffect } from 'react'
import Wrapper from '../../components/Wrapper'

import axios from 'axios'
const Recent = () => {
    const [data,setData] = useState({
        recent:[],
        loading:true
    })
    useEffect(() => {
        fetchDetails()
        return () => {
            fetchDetails()
        }
    },[])

    const fetchDetails = () => {
        
        axios.get('https://languid-jewel-production.up.railway.app/attend/'
          ,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(res => {
            console.log(res)
            setData({
                recent:res.data,
                loading:false
            })
            }).catch(err => {
                console.log(err)
               
            })
    }


    const Table = () => (
        <div className="relative w-5/6 mx-auto lg:w-3/4 overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-lg text-black bg-[#D9D9D9] tracking-wide font-light">
                <tr>
                    {/* <th scope="col" class="px-6 py-3">
                        Name 
                    </th> */}
                    <th scope="col" class="px-6 py-3">
                        Roll No
                    </th>
                    {/* <th scope="col" class="px-6 py-3">
                        Date
                    </th> */}
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                  
                </tr>
            </thead>
            <tbody>
                {data.recent.filter((v)=> v.date_time===new Date().toISOString().split('T')[0]).map((item,index) => (
                <tr key={index} className="bg-white border-b  hover:bg-gray-50">
                    {/* <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 ">
                        {item.name}
                    </td> */}
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 ">
                        {item.roll}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 ">
                        {item.date_time}
                    </td> */}
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
            {data?.loading ? <div>Loading...</div> :
                <Table/>
            }
        </Wrapper>
        </>
    )
}




export default Recent