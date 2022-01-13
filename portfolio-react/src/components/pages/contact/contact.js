import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "./helpers";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "FullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!FullName) {
      setErrorMessage("Name is required");

      return;
    }
    if (!Message) {
      setErrorMessage("Message is required");

      return;
    }
    alert(`${FullName}, thanks for send me a message!`);

    setFullName("");
    setMessage("");
    setEmail("");
  };