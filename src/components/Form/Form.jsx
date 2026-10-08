import { useState } from "react";
import styles from './Form.module.css';

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!verifyEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    window.alert(`Email ${email} submitted!`);
    setEmail("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setEmail(value);
  }

  function clearEmail() {
    setEmail("");
    setError("");
  }

  function verifyEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <label htmlFor="email">Email address:</label>
        <div className={styles.inputRow}>
          <input type="email" id="email" value={email} onChange={handleChange} />
          <button type="button" onClick={clearEmail}>Clear</button>
      </div>
      <div className={styles.error}>
        {error && <p>{error}</p>}
      </div>
      <button className={styles.submitButton} type="submit">Submit</button>
    </form>
  );
}
