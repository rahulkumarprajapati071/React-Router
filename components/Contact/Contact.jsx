import React from "react";

// Create a separate component for the contact form
const ContactForm = () => {
  return (
    <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
      <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
        Get in touch:
      </h1>
      <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
        Fill in the form to start a conversation
      </p>

      <div className="flex flex-col justify-center mt-8">
        <form className="p-6 flex flex-col justify-center form-container">
          <div className="flex flex-col">
            <label for="name" className="hidden">
              Full Name
            </label>

            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="email" className="hidden">
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="tel" className="hidden">
              Phone Number
            </label>

            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex items-end justify-end">
          <button
            type="submit"
            className="submit-button md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Update the Contact component to render the ContactForm
export default function Contact() {
  return (
    <div className="App">
      <ContactForm />
      {/* Your existing code */}
    </div>
  );
}
