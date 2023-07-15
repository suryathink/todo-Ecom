import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div style={{ width: "45%", margin: "auto", marginTop: "15px" }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
              required
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
              required
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", minHeight: "100px" }}
              required
            ></textarea>
          </div>
          <button
            onClick={() => {
              alert("Form Submitted");
            }}
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "lightblue",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
