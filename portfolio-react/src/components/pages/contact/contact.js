import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "./helpers";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
