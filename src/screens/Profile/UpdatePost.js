import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {

  const navigate = useNavigate();
  const [currentD, setCurrentD] = useState('');
  const [currentL, setCurrentL] = useState('');
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [user, setUser] = useState(null);

  const params = useParams();

  useEffect(()=> {
    
    axios.get(`http://localhost:3001/posts/getPost/${params.id}`).then(res => {

      setCurrentD(res.data);
      setCurrentL(res.data);
      
    }
      // console.log(res)
    )

   
  }, [])
  const locationId = controlId
 

  const updatePost = () => {


    console.log(params.id)
  }

    // const req = {
    //   description: req.body.description,
    //   location: req.body.location  
    // }

  //   axios.put('http://localhost:3001/posts', req ).then(res => {
  //     res.setDescription(res.description)
  //     res.setLocation(res.location)
  //   })
  // }

  const submission = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={submission}>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Edit Your News..</Card.Header>
          <Card.Body>


            <FloatingLabel
              controlId="description"
              className="mb-3"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="location"
              className="mb-3"
              onChange={(e) => setLocation(e.target.value)}
            >
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Group className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </Form>
  );
};

export default EditPost;
