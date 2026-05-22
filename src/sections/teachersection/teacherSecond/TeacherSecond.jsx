import React from "react";
import img1 from "../../../Assests/team-1.jpg";
import img2 from "../../../Assests/team-2.jpg";
import img3 from "../../../Assests/team-3.jpg";
import img4 from "../../../Assests/team-4.jpg";
import container from "./TeacherSecond.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const TeacherSecond = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [data, setData] = useState([]);

  const get_mentor = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/flower/get`);
      console.log(res.data.data, "rsds");
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get_mentor();
  }, []);

  return (
    <div className={container.first}>
      <div className={container.wrapper}>
        <div className={container.teacher}>
          <div className={container.line}></div>
          <p className={container.word}>OUR TEACHERS</p>
          <div className={container.line}></div>
        </div>
        <div className={container.meet}>
          <p>Meet Our Teachers</p>
        </div>
        <div className={container.img}>
            {data.map((c) =>(
               <div key={c.id}>
                <div>
                 <img src={c.image} alt="" style={{borderRadius:'50%',width:'270px'}} />
                 <div className={container.name}>{c.name}</div>
                 <div className={container.profession}>{c.profession}</div>
               </div>
               </div>
                  
            ))}
         
        </div>
        
      </div>
    </div>
  );
};

export default TeacherSecond;
