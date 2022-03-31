import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
const ViewUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state);
  const currentUser = users.find((user) => user.id === parseInt(id));

  return (
    <div className="mt-3  shadow-lg container">
      <h1>Name: {currentUser.name}</h1>
      <h1>Phone: {currentUser.number}</h1>
      <h1>Email: {currentUser.email}</h1>
    </div>
  );
};

export default ViewUser;
