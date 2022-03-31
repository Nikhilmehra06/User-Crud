import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
const ViewUser = ({ users }) => {
  const { id } = useParams();

  const currentUser = users.find((user) => user.id === parseInt(id));

  return (
    <>
      {currentUser ? (
        <div className="mt-3  shadow-lg container">
          <h1>Name: {currentUser.name}</h1>
          <h1>Phone: {currentUser.number}</h1>
          <h1>Email: {currentUser.email}</h1>
        </div>
      ) : (
        <h1 className="display-3 my-5 text-center">
          user with id {id} not exists
        </h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps, null)(ViewUser);
