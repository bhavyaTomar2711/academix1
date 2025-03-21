import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ClassroomCard from "../components/classroomCard";

const ClassroomPage = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleCreateClassroom = () => {
    const courseName = prompt("Enter Course Name:");
    const teacherName = prompt("Enter Teacher Name:");

    if (courseName && teacherName) {
      const newClassroom = { courseName, teacherName };
      setClassrooms((prevClassrooms) => [...prevClassrooms, newClassroom]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Classrooms</h1>

      <button style={isHovered?styles.createButtonHover:styles.createButton} onClick={handleCreateClassroom}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
  <FontAwesomeIcon icon={faPlus} style={styles.icon} /> Create
</button>



      <div style={styles.classroomList}>
        {classrooms.length > 0 ? (
          classrooms.map((classroom, index) => (
            <ClassroomCard key={index} courseName={classroom.courseName} teacherName={classroom.teacherName} />
          ))
        ) : (
          <p style={styles.p}>No classrooms available. Click "Create" to add one.</p>
        )}
      </div>

      <div style={styles.line}></div>
    </div>
  ); 
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  createButton: { height:"50px",width:"150px", position:"absolute",top:"8%",
    left:"88%",background: "#007bff", color: "#ffff", border: "none", borderRadius: "30px", cursor: "pointer",fontWeight:"normal",fontSize:"20px" },

    createButtonHover: { height:"50px",width:"150px", position:"absolute",top:"8%",
      left:"88%",background: "white", color: "#007bff", border: "3px solid #007bff", borderRadius: "30px", cursor: "pointer",fontWeight:"normal",fontSize:"20px" },
    
  classroomList: { display: "flex", flexWrap: "wrap",justifyContent: "flex-start",alignItems: "flex-start",marginTop: "8%",paddingLeft: "19%",gap: "15px" },


  icon: {fontSize: "20px" ,paddingRight:"7px",fontWeight:"bold"},
  h1: {color:"#373737",position:"absolute",left:"21%",top:"6%",fontSize:"38px",fontFamily:"Segoe UI",fontWeight:"bold"},
  p:{color:"#7d7d7d",fontSize:"17px",position:"absolute",left:"46%",top:"43%",fontFamily:"Inter",fontWeight:"lighter"},
  line:{height:"0.1%",width:"75%",position:"absolute",top:"16%",left:"21%",background:"rgba(0, 0, 0, 0.24)"}


};

export default ClassroomPage;
