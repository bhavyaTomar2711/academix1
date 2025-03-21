import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCar, faCalendar } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Sidebar = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState("classroom");

  const handleClick = (section) => {
    setActiveSection(section);
    setActiveButton(section);
  };

  return (
    <div style={styles.sidebar}>
      <img src="/academix.png" alt="Logo" style={styles.logo} />

      <div style={{ flexGrow: 0.25 }}></div>

      <button 
        style={activeButton === "classroom" ? styles.activeButton : styles.button} 
        onClick={() => handleClick("classroom")}
      >
        <FontAwesomeIcon icon={faBook} style={styles.icon} /> Classroom
      </button>

      <button 
        style={activeButton === "travel" ? styles.activeButton : styles.button} 
        onClick={() => handleClick("travel")}
      >
        <FontAwesomeIcon icon={faCar} style={styles.icon} />  Travel
      </button>

      <button 
        style={activeButton === "events" ? styles.activeButton : styles.button} 
        onClick={() => handleClick("events")}
      >
        <FontAwesomeIcon icon={faCalendar} style={styles.icon} /> Events
      </button>

      
      
    </div>
  );
};

const styles = {
  sidebar: { 
    top: "0.1%", left: "0%", borderTopRightRadius: "23px", borderBottomRightRadius: "23px",
    position: "absolute", width: "15%", height: "95.4%", background: "white", 
    padding: "20px", display: "flex", flexDirection: "column",boxShadow: "2px 0px 20px rgba(71, 71, 71, 0.2)" 

  },
  logo: { 
    width: "auto", height: "6.5%", position: "absolute", top: "6%", left: "7%"
  },
  button: { 
    height: "60px", width: "266px", background: "white", color:"#4e4e4e", 
    margin: "2.3% 0", border: "none", cursor: "pointer", marginLeft: "12px",
    borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "left",
    paddingLeft: "15px", fontSize: "19px", fontWeight:"normal",gap: "10px"
  },
 
  activeButton: { 
    height: "60px", width: "266px", background: "#e8eefe", color: "#1B59F8", 
    margin: "2.3% 0", border: "none", cursor: "pointer", marginLeft: "12px",
    borderRadius: "13px", fontWeight: "bold", 
    display: "flex", alignItems: "center", justifyContent: "left", paddingLeft: "15px",
    fontSize: "16px", gap: "10px"
  },
  icon: {
    fontSize: "27px" ,// ✅ Adjust icon size
    marginLeft:"10px",
    paddingRight:"4px",
  }
};

export default Sidebar;
