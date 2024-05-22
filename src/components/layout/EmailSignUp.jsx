import React from "react";
import {useState} from 'react';
import { register } from '../../utils/auth';
import {hideLoginModal} from '../../ReduxSlices/loginModalSlice.js';
import { useDispatch } from 'react-redux';

const EmailSignUp = ({setSignInModal}) => {
  const dispatch = useDispatch()
  const [inputDetails, setInputDetails] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitFunc = (e) => {
    e.preventDefault();
    register(inputDetails.email, inputDetails.password);
    setInputDetails({
      email: "",
      password: "",
    });

    dispatch(hideLoginModal())
  };

  return (
    <form
      onSubmit={onSubmitFunc}
      className="grid gap-5 items-center justify-center"
    >
      <label className="grid gap-2 text-black">
        Email
        <input
          name="email"
          type="text"
          value={inputDetails.email}
          placeholder="johndoe@gmail.com"
          className="lg:px-8 lg:py-3 px-6 py-3 border border-gray-900 border-solid border-2 rounded-md text-gray-900"
          onChange={onInputChange}
        />
      </label>

      <label className="grid gap-2 text-black">
        Password
        <input
          name="password"
          type="password"
          value={inputDetails.password}
          placeholder="Password"
          className="lg:px-8 lg:py-3 px-6 py-3 border border-gray-900 border-solid border-2 rounded-md text-gray-900"
          onChange={onInputChange}
        />
      </label>

      <button
        className={`bg-accent rounded-md cursor-pointer relative lg:px-8 lg:py-3 px-6 py-3 group hover:z-20 text-text md:text-link text-linkMobile text-center`}
      >
        Sign up
      </button>

      <p className="text-linkMobile sm:text-link mt-10 cursor-pointer" onClick={() => setSignInModal(true)}>
        Already have an accout? <span className="text-secondary">Login</span>
      </p>
    </form>
  );
};

export default EmailSignUp;
