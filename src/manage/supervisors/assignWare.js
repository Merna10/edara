import { AdminHeader } from "../../pages/shared/header/admiHeader";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import'../../css/register.css'
export const AssignbSuberv = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      alert("Added")

    }

    setValidated(true);
  };

  return (
    <><AdminHeader/>
    <div className='register'>
      <br></br>
    <div className='register1'>
      
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Assign Subervisor</Form.Label>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>ID</Form.Label>
          <InputGroup hasValidation>
          <Col>
          <Form.Control
              type="number"
              placeholder="ID"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter your ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group   md="4" controlId="">
          <Form.Label>Warehouse ID</Form.Label>
          <InputGroup >
          <Col>
            <Form.Control
              type="number"
              placeholder="Warehouse ID"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button variant="dark" type="submit">Add</Button>
      </Form>
    </div></div>
    </>
  );
}
