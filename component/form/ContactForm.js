"use client";
import { useEduorContext } from "@/context/EduorContext";
// import { Axios } from "axios";
import axios from "axios";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
const ContactForm = () => {
  const { isValidEmail } = useEduorContext();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [islooderMessage, setisloder] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Name || !email || !Message) {
        toast.error("Please fill out all fields.", { position: "top-right" });
      } else if (!isValidEmail(email)) {
        toast.warning("Please provide a valid email address.", {
          position: "top-right",
        });
      } else {
        setisloder(true);
        // If the form is successfully submitted, show a success toast
        const dataaa = {
          Name,
          email,
          Message,
        };

        const { data } = await axios.post(`${process.env.url}/contact`, dataaa);

        // return console.log(data);
        if (data.status == true) {
          toast.success(data.message, {
            position: "top-right",
          });
          // reset();
          setisloder(false);
          setName("");
          setEmail("");
          setMessage("");
        }
        // const data = await Axios.post("");
      }
      setisloder(false);
    } catch (error) {
      toast.error(error.message);
      setisloder(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Message"
            value={Message}
            name="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            disabled={islooderMessage}
            className="common_btn_2"
          >
            {islooderMessage ? <BeatLoader color="#36d7b7" /> : " SEND REQUEST"}
            {/* SEND REQUEST */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
