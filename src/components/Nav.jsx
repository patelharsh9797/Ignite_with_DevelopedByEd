import React, { useState } from "react";

// Redux & Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../assets/img/logo.svg";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>

      <form action="">
        <div className="search">
          <input
            value={textInput}
            type="text"
            onChange={inputHandler}
            name=""
            id=""
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </div>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  text-align: center;
  padding: 3rem 5rem;

  .search {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 30%;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 2rem;
    border: none;
    outline: none;
    box-shadow: 0 0 30px rgba(0 0 0/0.2);
    /* border-radius: 10px; */
  }
  button {
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    color: #fff;
    background-color: #ff7676;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;