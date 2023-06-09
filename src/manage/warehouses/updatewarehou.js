import { AdminHeader } from "../../pages/shared/header/admiHeader";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'../../css/addwarehou.css'
export const UpdateWarehous = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      alert("Updated")

    }

    setValidated(true);
  };

  return (
    <><AdminHeader/>
    <div className='updateware'>
      <br></br>
    <div className='updateware1'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Update Warehouse</Form.Label>
  
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation><Col>
            <Form.Control
              type="text"
              required
              placeholder="Name"
              style={{width:'  15cm'}}
              aria-describedby="inputGroupPrepend"
              
            /></Col>
            <Form.Control.Feedback type="invalid">
              Incorrect Name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Location</Form.Label>
          <InputGroup hasValidation><Col>
            <Form.Control
              type="text"
              placeholder="Location"
              style={{width:' 15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Status</Form.Label>
          <InputGroup hasValidation>
          <Col><Form.Control
              type="Text"
              placeholder="Status"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Please enter Status.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Button variant="dark" type="submit">Update</Button>
      </Form>
    </div></div>
    </>
  );
}
