import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://51.21.169.150:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.data))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Full Stack App</h1>
      <p style={styles.text}>Response from backend:</p>
      <h2 style={styles.result}>{message}</h2>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  title: {
    color: "#333",
  },
  text: {
    fontSize: "18px",
  },
  result: {
    color: "green",
  },
};

export default App;