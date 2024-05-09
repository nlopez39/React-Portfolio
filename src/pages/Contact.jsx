import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  //name
  //email
  //comments
  //submit button
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  //handle input change
  //will handle user input from the box, this will change the state of input box
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name; //what kind of input they are on
    const inputValue = target.value; //user input

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType == "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  //handle the email input validation after user has finished typing
  const handleEmailValidation = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Email is incorrect");
      setSubmitMessage("");
    } else {
      setErrorMessage("");
    }
  };
  //handle message being empty
  const handleMessageBox = () => {
    if (!message) {
      setErrorMessage("Please fill in message");
      setSubmitMessage("");
    } else {
      setErrorMessage("");
    }
  };
  //handle name box; make sure user filled it in before moving along
  const handleNameBox = () => {
    if (!name) {
      setErrorMessage("Please fill in name");
      setSubmitMessage("");
    } else {
      setErrorMessage("");
    }
  };
  //handle the submit button
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //check again that the email is valid

    handleEmailValidation();

    // Check if any field is empty or if the email is incorrect
    if (!email || !name || !message || !validateEmail(email)) {
      setErrorMessage("Please fill in all fields correctly.");
    } else {
      setSubmitMessage("Submitted Successfully! Thank you");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  //return a form
  return (
    <div className="mt-3">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={name}
            onChange={handleInputChange}
            onBlur={handleNameBox}
            name="name"
            type="name"
            //these are placeholders for the input box that only appeard when I added onchange
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={email}
            onChange={handleInputChange}
            onBlur={handleEmailValidation}
            name="email"
            type="text"
            placeholder="email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            value={message}
            onChange={handleInputChange}
            onBlur={handleMessageBox}
            name="message"
            type="text"
            placeholder="message"
            style={{ height: 100 }}
          />
        </div>
        <button
          type="submit"
          className="btn btn submit-btn"
          // style={{ color: "#EDE3E4", background: "black" }}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p style={{ color: "red" }} className="error-text">
            {errorMessage}
          </p>
        </div>
      )}
      {submitMessage && (
        <div>
          <p style={{ color: "green" }} className="success-text">
            {submitMessage}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
