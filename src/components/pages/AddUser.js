import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { addUser } from '../../redux/action/actions';

const AddUser = ({ users, addingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find((user) => user.email === email && email);
    const checkNumber = users.find((user) => user.number === number && number);
    const checkName = users.find((user) => user.name === name && name);

    if (!email || !number || !name) {
      return toast.warning('Please Fill in All Fill');
    }

    if (checkEmail) {
      return toast.error('This email is already exist!');
    }
    if (checkNumber) {
      return toast.error('This number is already exist!');
    }
    if (checkName) {
      return toast.error('This name is already exist!');
    }

    const data = {
      id: users.length + 1,
      name,
      email,
      number,
    };

    addingUser(data);
    toast.success('User Added Successfully');
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add User</h1>
      <div className="row">
        <div className="col-md-6 shadow-lg mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="submit"
                value="Add User"
                className="btn btn-block btn-dark w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addingUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
