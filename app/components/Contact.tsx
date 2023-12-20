import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col bg-blue-100 dark:bg-gray-800 dark:text-white w-full h-screen px-20 py-10 pt-24"
    >
      <div className="flex flex-col space-y-4">
        <div className="mb-10 w-full text-center">
          <h1 className="text-3xl w-fit border-4 border-black dark:border-white font-semibold mx-auto p-4">
            Contact
          </h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
