import React from "react";
import { Form } from "react-bootstrap";
const Input = (props) => {
  return (
    <div>
      <Form.Group>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          defaultValue={props.defaultValue}
          required
        />
      </Form.Group>
    </div>
  );
};
export default Input;
