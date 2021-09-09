import { Button } from "react-bootstrap";
import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import "./MiniSearchbar.css";

const Searchbar = () => {
  return (
    <div>
      <InputGroup className="mb-3 group">
        <FormControl
          id="input_one"
          className="search_input"
          aria-label="First name"
          placeholder="Budget"
        />
        <FormControl
          className="search_input"
          aria-label="Last name"
          placeholder="Adress"
        />
        <Button className="mini_search_btn">
          <FaSistrix className="search_icon" />
        </Button>
      </InputGroup>
    </div>
  );
};

export default Searchbar;
