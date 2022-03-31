import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../redux/action/actions';

const EditUser = ({ users, editUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUser = users.find((user) => user.id === parseInt(id));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setNumber(currentUser.number);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find(
      (user) => user.id !== parseInt(id) && user.email === email
    );
    const checkNumber = users.find(
      (user) => user.id !== parseInt(id) && user.number === number && number
    );

    if (!email || !number || !name) {
      return toast.warning('Please Fill in All Fill');
    }

    if (checkEmail) {
      return toast.error('This email is already exist!');
    }
    if (checkNumber) {
      return toast.error('This number is already exist!');
    }

    const data = {
      id: currentUser.id,
      name,
      email,
      number,
    };

    editUser(data);
    toast.success('User UPDATE Successfully');
    navigate('/');
    console.log(data);
  };

  return (
    <div className="container">
      {currentUser ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit User</h1>
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
                <div className="form-group d-flex justify-content-center py-2">
                  <input
                    type="submit"
                    value="Update User"
                    className=" btn btn-sm btn-dark me-3 "
                  />
                  <Link to="/" className="btn btn-sm btn-danger ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          user with id {id} not exists
        </h1>
      )}
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
    editUser: (id) => dispatch(updateUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
