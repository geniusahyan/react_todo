import React, { useRef, useState } from 'react'

function List(props) {
    const donenot = useRef()
    const [bgchange, setbgchange] = useState(null)
    const [going, setgoing] = useState("Running");

    const checkboxt = () => {
        setbgchange(true) 
        setTimeout(() => {
            if (donenot.current.classList[6]=='done') {
                setgoing('Completed')
            }else{
                setgoing('Rejected')
            }
            console.log()      
        }, 100); 
    };
    const checkboxf = () => {
        setbgchange(false) 
        setTimeout(() => {
            if (donenot.current.classList[6]=='done') {
                setgoing('Completed')
            }else{
                setgoing('Rejected')
            }
            console.log()      
        }, 10); 
    };

  return (
    <div className='.ffth' >
                <div className="itemwrapper  ">
                  <div className="left"></div>

                  <li className="relative ffthli pt-8 ">
                    <p className={`${bgchange?' bg-[#7b32be] dones text-white':'bg-[#00ffbf] text-[#191955] nots'}`} >{going}</p>
                    <div ref={donenot} className={`details py-3 rounded-b-[0.7rem] rounded-tr-[0.7rem] text-[#191955] ${bgchange?'bg-[#7b32be] done text-white':'bg-[#00ffbf] not'}  mb-3`}>
                      <div
                        onClick={checkboxt}
                        className="tickbox absolute flex justify-center rotate-[45deg] rounded-lg items-center left-4 w-7 h-7 bg-[blue] top-11 "
                      >
                        <i className=" rotate-[-45deg] fa-solid fa-check-double"></i>
                      </div>
                      <div
                        onClick={checkboxf}
                        className="tickbox absolute flex justify-center rotate-[45deg] rounded-lg items-center left-12 w-7 h-7 bg-[red] top-11 "
                      >
                        <i className=" rotate-[-45deg] fa-solid fa-square-xmark"></i>
                      </div>
                      <h1 className="itemtext ml-[5.3rem] w-48 text-start ">{props.text}</h1>
                    </div>
                    <hr />
                  </li>
                </div>
              </div>
  )
}

export default List
