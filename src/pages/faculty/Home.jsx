/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React,{ useState,useCallback,useEffect } from 'react'
import Wrapper from '../../components/Wrapper'

import axios from 'axios'
import NFC from 'nfc-react-web'
const Home = () => {
    const [scan,setScan] = useState(false)
    const [modal,setModal] = useState(false)
    const [hehe,setHehe] = useState(false)
    const [data,setData] = useState(false)
    const Scan = useCallback(async() => {

        if ("NDEFReader" in window) {
            try {
                const ndef = new window.NDEFReader();
                await ndef.scan();
              
                console.log("Scan started successfully.");
                // alert("Scan started successfully.")
                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };
    
                ndef.onreading = event => {
                    console.log("NDEF message read.");
                    onReading(event); //Find function below
                };
            } catch (error) {
                setData(error)
                console.log(`Error! Scan failed to start: ${error}.`);
            }
        } else {
            console.log("NDEFReader not supported by this browser.");
            // alert("NDEFReader not supported by this browser.")
        }
    },[])
    
    const onReading = ({message, serialNumber}) => {
        console.log(serialNumber);
        for (const record of message.records) {
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                  
                    setData(textDecoder.decode(record.data))
                    // alert(textDecoder.decode(record.data))
                     updateScan(textDecoder.decode(record.data))
                    break;
                case "url":
                    // TODO: Read URL record with record data.
                    break;
                default:
                    // TODO: Handle other records with record data.
            }
        }
    };
    
    // useEffect(()=>{
    //     Scan()
    // },[Scan])
    


    const handleSubmit = async() => {
        await setScan(true)
        setTimeout(() => {
            updateScan()
        }, 2000);
    }

    const updateScan = async(data) => {
        const splitData = data.split(",")
        const name = splitData[0]
        const rollNO = splitData[1] 
       
        await axios.post('https://languid-jewel-production.up.railway.app/attend/store',{
            "name": name,
            "roll": rollNO,
            "status_now": true
          },{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(res => {
            console.log(res)
            setScan(false)
            setModal(true)
            }).catch(err => {
                console.log(err)
                setScan(false)
                setModal(true)
            })
    }
    const NFCUpdate = () => {

    }

    const Modal = () => (
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className="overflow-y-auto text-black overflow-x-hidden fixed top-[15%] w-full md:inset-0 h-modal md:h-full bg-gray-500/20">
    <div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto  ">
      
        <div className="relative bg-white rounded-lg shadow ">
          
            <div className="flex justify-between items-start p-4 rounded-t border-b ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Success 
                </h3>
                <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
          
            <div className="p-6 space-y-6 mx-auto flex item-center">
              <img className='mx-auto h-52' src='https://img.icons8.com/external-filled-outline-perfect-kalash/344/external-Tick-basic-filled-outline-perfect-kalash.png'/>
            </div>
           
            <button onClick={() => setModal(false)} className="flex bg-indigo-500 w-full text-white mr-auto p-6 space-x-2 rounded-b border-t border-gray-200 ">
              <span className="font-semibold text-sm mx-auto">
                   Done
              </span>
            </button>
        </div>
    </div>
</div>

    )
    return(
        <>
        <Wrapper>
            
        {/* {data && <p>{data?.includes("")}</p>}  */}
            <div className='text-2xl w-full h-screen mx-auto text-center flex justify-center items-center'>
               
               
  <button onClick={() => Scan() } className="relative z-0 -mt-36">
  <svg className={`h-96 w-full ${scan ? 'animate-pulse' : "" } `} viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z">
                    </path>
                    <circle
                    cx="12" cy="12" r="10"></circle>
                </svg> 
                
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <p className="text-4xl font-bold text-white">{scan ? "Scanning" : "Scan"}</p>
    </div>
       
  </button>
            </div>
           {modal &&  <div className='mx-auto'>
            <Modal/>
            </div> }
           
        </Wrapper>
        </>
    )
}




export default Home