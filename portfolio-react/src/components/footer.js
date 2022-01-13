import React from "react";
import "./Portfolio.css";

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0 25px 0",
    paddingTop: "50px",
    fontSize: "20px",
    borderTop: "5px solid rgb(43, 43, 43)",
  },

  par: {
    marginRight: "5px",
  },
};

export default function Footer() {
  return (
    <div style={styles.card}>
      <p style={styles.par}>P: 773-213-6979</p>
      <p style={styles.par}> ||</p>
      <p style={styles.par}>E: iameduardvoicu@gmail.com</p>
      <p style={styles.par}> ||</p>
      <p style={styles.par}>
        <a href="https://linkedin.com/in/eduardvoicu">LinkedIn</a>
      </p>
      <p style={styles.par}> ||</p>
      <p style={styles.par}>
        <a href="https://github.com/eduardvoicu">Github</a>
      </p>
      <p style={styles.par}> ||</p>
      <p style={styles.par}>
        <a href="https://twitter.com/nomadeddy">Twitter</a>
      </p>
    </div>
  );
}