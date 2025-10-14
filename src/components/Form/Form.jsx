import { useState } from "react";

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

  function verifyEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input type="email" id="email" value={email} onChange={handleChange} />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
