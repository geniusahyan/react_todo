import React, { useEffect, useState } from "react";
import List from "./List";
import Addlist from "./Addlist";

function ToDoList() {
  const [Hour, setHour] = useState(null);
  const [Minute, setMinute] = useState(null);
  const [Month, setMonth] = useState(null);
  const [Year, setYear] = useState(null);
  const [dates, setDates] = useState(null);
  const [week, setweek] = useState(null);
  const [listarray, setlistarray] = useState([])


  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let Hourss = date.getHours();
      let Minutes = date.getMinutes();
      let dates = date.getDate();
      let weeks = date.getDay();
      setMonth(date.toLocaleString("default", { month: "long" }));
      setYear(date.getFullYear());

      setMinute(Hourss);
      setHour(Minutes);
      setDates(dates);
      switch (weeks) {
        case 0:
          setweek("Sun");
          break;
        case 1:
          setweek("Mon");
          break;
        case 2:
          setweek("Tue");
          break;
        case 3:
          setweek("Wed");
          break;
        case 4:
          setweek("Thru");
          break;
        case 5:
          setweek("Fri");
          break;
        case 6:
          setweek("Sat");
          break;
      }

      if (Hourss > 12) {
        setHour(Hourss - 12);
      }
      if (Minutes < 10) {
        setMinute("0" + Minutes);
      }
      if (Hourss < 10) {
        setMinute("0" + Hourss);
      }
    }, 1000);
  }, []);


  const addinglist=(content)=>{
    if (content.trim()=='') {
      return
    }else{
      setlistarray((prev)=>{
        return [...prev, content]})
    }
  }

  return (
    <div className="bg-[#16164d] flex text-center overflow-hidden flex-col justify-between w-[20rem] h-[38rem] rounded-2xl text-white pt-2 ">
      <div className="fst flex justify-between px-2 items-center text-[0.6rem] ">
        <h1>{`${Hour} : ${Minute}`} </h1>
        <span className="w-28 h-6 ahyan rounded-full leading-6 tracking-[0.5rem] bg-[#23498fbb]">Ahyan</span>
        <div className="icons flex gap-1">
          <i className="fa-solid fa-tower-cell"></i>
          <i className="fa-solid fa-wifi"></i>
          <i className="fa-solid fa-battery-three-quarters"></i>
        </div>
      </div>

      <div className="snd flex justify-between px-2 items-center text-md ">
        <i className="fa-solid fa-arrow-left-long"></i>
        <h2>My Task</h2>
        <i className="fa-solid fa-ellipsis"></i>
      </div>

      <div className="thrd">
        <h1>{` ${Month} ${Year} `}</h1>
      </div>

      <div className="frth">
        <h1>
          {dates} {week}{" "}
        </h1>
      </div>

      <div className="brtfrth">
        <Addlist Click={addinglist} />
      </div>

      <div className="ffth h-[24rem] bg-[#222363] px-5 pt-8 mx-[-0.5rem] ">
        <ul>
          {listarray.map((listitem , index) => {
            return (
              <List key={index} text={listitem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
