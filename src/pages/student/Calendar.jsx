import React, { useState, useEffect} from 'react'
import Wrapper from '../../components/Wrapper'

const StudentCalendar = () => {
    const [date,setDate] = useState('');
    const [data,setData] = useState({
        recent: [],
        loading: true,
    });
    
    console.log(date)
    const InputDate = () => (
        <>
        <div className="flex">
            <input datepicker className='p-4 mx-auto bg-blue-100/50 rounded ' type="date" value={date} onChange={(e) => setDate(e.target.value) } />
        </div>
        </>
    )

    const Table = () => (
        <div className="relative w-full mx-auto lg:w-3/4 overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                {data.recent.map((item,index) => (
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