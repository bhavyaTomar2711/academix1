import React, { useState } from "react";

const ClassroomCard = ({ courseName, teacherName }) => {
  const [isJoined, setIsJoined] = useState(false); // ✅ Track if user has joined
  const [isChatOpen, setIsChatOpen] = useState(false); // ✅ Track chat visibility
  const [isHovered, setIsHovered] = useState(false);

  // ✅ Handles joining the classroom
  const handleJoinClick = (e) => {
    e.stopPropagation(); // Prevents triggering chat toggle
    setIsJoined(true);
  };

  // ✅ Handles disjoining the classroom
  const handleDisjoinClick = (e) => {
    e.stopPropagation(); // Prevents chat toggle when clicking "Joined"
    const confirmLeave = window.confirm("Are you sure you want to leave this classroom?");
    if (confirmLeave) {
      setIsJoined(false);
      setIsChatOpen(false); // ✅ Close chat when leaving
    }
  };

  // ✅ Handles opening/closing chat section
  const handleCardClick = () => {
    if (isJoined) {
      setIsChatOpen((prev) => !prev); // ✅ Toggle chat section
    } else {
      alert("You must join the classroom to access the chat!");
    }
  };

  return (
    <div>
      {/* ✅ Clicking the card toggles chat (only if joined) */}
      <div style={styles.card} onClick={handleCardClick}>
        <h3 style={styles.courseName}>{courseName}</h3>
        <p style={styles.teacherName}>Instructor : {teacherName}</p>

        {/* ✅ Button toggles between "Join" and "Joined (Disjoin)" */}
        {isJoined ? (
          <button style={isHovered ? styles.joinedButtonHover : styles.joinedButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
          onClick={handleDisjoinClick}>
            Joined
          </button>
        ) : (
          <button
          style={isHovered ? styles.joinButtonHover : styles.joinButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleJoinClick}
        >
          Join
        </button>
        )}
      </div>

      {/* ✅ Chat section appears only if joined & toggled open */}
      {isJoined && isChatOpen && (
        <div style={styles.chatSection}>
          <h4>Classroom Chat</h4>
          <p>Chat messages will appear here...</p>
          <button style={styles.closeButton} onClick={() => setIsChatOpen(false)}>Close Chat</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: { 
    border: "1.5px  solid rgba(32, 32, 32, 0.2)", padding: "15px", borderRadius: "20px", 
    width: "250px", textAlign: "center", margin: "10px", cursor: "pointer",
    transition: "0.3s", background: "white",boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)"
  },
  joinButton: { 
    background: "white", color: "#007bff",height:"35px", borderRadius: "10px",width:"80px",marginLeft:"160px", 
    cursor: "pointer", marginTop: "5px",border:"2px solid #007bff",fontFamily:"arial",fontWeight:"600",fontSize:"16px"
  },
  joinButtonHover: { 
    background: "#007bff", color: "white", height: "35px", borderRadius: "10px", 
    width: "80px", marginLeft: "160px", cursor: "pointer", marginTop: "5px", 
    border: "2px solid #007bff", fontFamily: "Arial", fontWeight: "600", fontSize: "16px",
    transition: "0.3s ease"
  },
  joinedButton: { 
     background: "white", color: "#ff172d",height:"35px", borderRadius: "10px",width:"80px",marginLeft:"160px", 
    cursor: "pointer", marginTop: "5px",border:"2px solid #ff172d",fontFamily:"arial",fontWeight:"600",fontSize:"16px"
  },
  joinedButtonHover: { 
    background: "#ff172d", color: "white",height:"35px", borderRadius: "10px",width:"80px",marginLeft:"160px", 
   cursor: "pointer", marginTop: "5px",border:"none",fontFamily:"arial",fontWeight:"600",fontSize:"16px"
 },
  chatSection: { 
    marginTop: "10px", padding: "10px", border: "1px solid #ccc", 
    borderRadius: "5px", background: "#fff"
  },
  closeButton: { 
    background: "#dc3545", color: "#fff", padding: "5px", borderRadius: "5px", 
    cursor: "pointer", border: "none", marginTop: "10px"
  },
  courseName: { 
    fontSize: "24px",
    fontWeight: "700",
    color: "#373737",  
    textAlign: "left", 
    fontFamily:"Segoe UI",
    marginTop: "8px",
    marginLeft:"17px"

  },
  teacherName: { 
    fontSize: "18px", 
    color: "#373737", 
    textAlign: "left",
    fontFamily:"Segoe UI",
    fontWeight: "400",
    marginLeft:"18px"
  }
};

export default ClassroomCard;
