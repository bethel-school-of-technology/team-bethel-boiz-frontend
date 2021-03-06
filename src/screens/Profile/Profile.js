import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";
import EditPost from "./UpdatePost";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("myJWT");

    // console.log(token);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/users/getInfo", { jwt: token }, options)
      .then((res) => {
        // console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(user);
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("myJWT");

    // console.log(token);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/users/getInfo", { jwt: token }, options)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (user === null || posts === null) {
    return <div>loading user...</div>;
  } else {
    return (
      <div>
        <Container className="p-4 d-flex justify-content-center">
          <ListGroup variant="flush">
            <div>
              {user.profile_pic ? (
                <img thumbnail="true" className="pp" src={user.profile_pic} alt="" width="500" />
              ) : (
                ""
              )}
              
            </div>
            <Button
                href={`/profile/image/${user.id}`}
                className="btn-sm"
                variant="Secondary"
              >edit</Button >
            <ListGroup.Item>{user.user_name}</ListGroup.Item>
            <ListGroup.Item>
              {user.first_name} {user.last_name}
            </ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
            <ListGroup.Item>{user.address}</ListGroup.Item>
            <ListGroup.Item>{user.state}</ListGroup.Item>
            <ListGroup.Item>{user.city}</ListGroup.Item>
            <ListGroup.Item>{user.zip_code}</ListGroup.Item>
            <ListGroup.Item>{user.country}</ListGroup.Item>
          </ListGroup>
          <ul>
            {user.Posts.map((post, i) => (
              <Card key={i}>
                <Card.Header as="h5">...</Card.Header>
                <Card.Body>
                  <Card.Title>{post.location}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button
                    href={`/profile/updatePost/${post.id}`}
                    className="btn"
                    variant="secondary"
                  >
                    edit
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ul>
        </Container>
      </div>
    );
  }
};

export default Profile;
