import React from "react";

const ProfileCard = () => {
  const handleButtonClick = (platform) => {
    let url;
    switch (platform) {
      case "GitHub":
        url = "https://github.com/";
        break;
      case "Frontend Mentor":
        url = "https://www.frontendmentor.io/"; 
        break;
      case "LinkedIn":
        url = "https://www.linkedin.com/"; 
        break;
      case "Twitter":
        url = "https://twitter.com/"; 
        break;
      case "Instagram":
        url = "https://instagram.com/"; 
        break;
      default:
        url = "#";
    }
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="data:image/jpeg;base64,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" alt="Profile"
          style={styles.image}/>
        <h2 style={styles.name}>Sanjana Yadav</h2>
        <p style={styles.location}>Janakpur, Nepal</p>
        <p style={styles.description}>
          "Front-end developer and researcher."
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => handleButtonClick("GitHub")}>
            GitHub
          </button>
          <button style={styles.button} onClick={() => handleButtonClick("Frontend Mentor")}>
            Frontend Mentor
          </button>
          <button style={styles.button} onClick={() => handleButtonClick("LinkedIn")}>
            LinkedIn
          </button>
          <button style={styles.button} onClick={() => handleButtonClick("Twitter")}>
            Twitter
          </button>
          <button style={styles.button} onClick={() => handleButtonClick("Instagram")}>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212",
  },
  card: {
    width: "300px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    color: "#fff",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  location: {
    color: "#9acd32",
    margin: "5px 0",
  },
  description: {
    fontStyle: "italic",
    fontSize: "14px",
    color: "#b3b3b3",
    margin: "10px 0",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    backgroundColor: "#333",
    border: "none",
    padding: "10px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProfileCard;
