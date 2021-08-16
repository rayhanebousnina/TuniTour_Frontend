import { Button } from 'react-bootstrap';
import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import './Searchbar.css'

const Searchbar = () => {
  return(
    <div>
        <InputGroup className="mb-3">            
            <FormControl id="input_one" className="search_input" aria-label="First name" placeholder="Budget"/>
            <FormControl className="search_input" aria-label="Last name" placeholder="Adress" />
            <Button className="search_btn"><FaSistrix className="search_icon"/></Button>
        </InputGroup>
    </div>
   )

 }

export default Searchbar