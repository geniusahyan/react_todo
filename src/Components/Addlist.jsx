import React, { useState } from 'react'

function Addlist(props) {
    const [content, setcontent] = useState('')

    const inpvaluechange = (e)=>{
        setcontent(e.target.value)
    }

    const addcontent = ()=>{
        props.Click(content)
        setcontent('')
    }
  return (
    <div className=' bitttfrth items-center flex justify-between mx-8 text-white ' >
      <input value={content} onChange={inpvaluechange} type="text" name="" id="" />
      <div className='flex items-center addbtn justify-center w-9 rounded-full ml-3 h-9  bg-cyan-300 ' onClick={addcontent}>
      <i className="fa-solid fa-heart-circle-plus "></i>
      </div>
    </div>
  )
}

export default Addlist
