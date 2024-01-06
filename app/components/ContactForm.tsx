"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log("response sent");
        if (res.status === 200) {
          console.log("response received");
          setFormData({ name: "", email: "", message: "" });
          toast.success("Message Sent Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        }
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after request completion
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <ToastContainer />
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-600 font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-600 font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-600 font-semibold mb-2"
        >
          Message
        </label>
        <input
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="textarea textarea-primary w-full max-w-xs"
          required
        ></input>
      </div>
      <div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
