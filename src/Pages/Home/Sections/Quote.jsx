import React, { useState } from "react";
import { styles } from "../../../styles";
import Button from "../../../components/common/Button";
import axios from 'axios';

const Quote = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch a random quote from the Quotable API
      const response = await axios.get('https://api.quotable.io/random');
      const quote = response.data.content;

      // Send the email with EmailJS (Assuming you have some function to send email)
      const templateParams = {
        email: email,
        quote: quote,
      };

    //   Send to email functionality goes here

      // This is where you would call your email sending function
      setMessage('Quote sent successfully!');
    } catch (error) {
      console.error('Error sending email: ', error);
      setMessage('Failed to send quote.');
    }

    setEmail('');
  };

  return (
    <section className={`${styles.paddingY}`}>
      <h1 className={`${styles.sectionHeadText} text-center`}>Get a Quote</h1>

      <form className="flex items-center justify-center mt-16" onSubmit={onEmailSubmit}>
        <input
          type="text"
          placeholder="johndoe@gmail.com"
          className="border border-2 border-solid border-white-100 rounded-l-md bg-white-100 lg:px-8 lg:py-3 px-6 py-3 md:text-link text-linkMobile text-black w-full sm:w-1/4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`border border-accent border-solid border-2 rounded-r-md cursor-pointer relative lg:px-8 lg:py-3 px-6 py-3 group hover:z-20 text-text md:text-link text-linkMobile`}
        >
          Send
          <div
            className={`absolute top-0 left-0 bottom-0 bg-accent w-0 group-hover:w-full transition-all duration-300 group-hover:-z-10`}
          ></div>
        </button>
      </form>
    </section>
  );
};

export default Quote;
